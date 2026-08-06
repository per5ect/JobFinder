package com.jobfinder.backend.jobfinderbackend.services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.jobfinder.backend.jobfinderbackend.dto.ResumeAnalysisResponseDTO;
import com.jobfinder.backend.jobfinderbackend.models.Resume;
import com.jobfinder.backend.jobfinderbackend.models.User;
import com.jobfinder.backend.jobfinderbackend.repository.ResumeRepository;
import com.jobfinder.backend.jobfinderbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;
    private final Cloudinary cloudinary;
    private final UserRepository userRepository;

    /**
     * Nahraje životopis uživatele do úložiště Cloudinary a uloží odkaz na něj do databáze.
     */
    public Resume uploadResume(MultipartFile file, String userEmail) throws IOException {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Map uploadResult;
        try(InputStream inputStream = file.getInputStream()) {
            uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap(
                    "resource_type", "raw",
                    "folder", "JobFinderRESUMES/",
                    "public_id", user.getFirstName() + user.getLastName() + "_resume_" + user.getId(),
                    "overwrite", true
            ));
        }

        String fileUrl = uploadResult.get("secure_url").toString();

        Resume resume = resumeRepository.findByUser(user).orElse(new Resume());

        resume.setCloudLink(fileUrl);
        resume.setUser(user);

        return resumeRepository.save(resume);
    }

    public void deleteResume(String userEmail){
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Resume resume = resumeRepository.findByUser(user)
                .orElseThrow(() -> new IllegalStateException("Resume not found"));

        String publicId = "JobFinderRESUMES/" + user.getFirstName() + user.getLastName() + "_resume_" + user.getId();

        try {
            cloudinary.uploader().destroy(publicId, ObjectUtils.asMap(
                    "resource_type", "raw"
            ));
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to destroy resume");
        }

        resumeRepository.delete(resume);
    }

    public String getResumeLink(String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Resume resume = resumeRepository.findByUser(user)
                .orElseThrow(() -> new IllegalStateException("Resume not found for user"));

        return resume.getCloudLink();
    }

    public ResumeAnalysisResponseDTO getResumeDetails(String userEmail){
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Resume resume = resumeRepository.findByUser(user)
                .orElseThrow(() -> new IllegalStateException("Resume not found for user"));

        return new ResumeAnalysisResponseDTO(resume.getTechStackFromCV(), resume.getExperienceYears());
    }
}
