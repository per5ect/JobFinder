package com.jobfinder.backend.jobfinderbackend.utils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.Map;

@Slf4j
@Component
@RequiredArgsConstructor
public class GeminiClient {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiLink;

    private final String prompt = """
    You are analyzing a resume to extract structured data for a job-matching system.

    Extract ONLY technical skills relevant to IT roles: programming languages, frameworks,
    libraries, databases, tools, platforms, and methodologies (e.g. Java, Spring, PostgreSQL,
    Docker, Scrum, REST API). Do NOT include soft skills, spoken languages (e.g. English,
    German), certifications, courses, degrees, or job titles.

    Return exactly one line in this format:
    tech1, tech2, tech3, ..., N

    Where:
    - tech1, tech2, ... are the extracted technologies, each listed only once (no duplicates),
      in the order they appear in the resume
    - N is the last value: total number of full years of IT-related work experience (including
      internships), calculated relative to the current date: %s
    - N must be a single whole number (e.g. 2, not 2.5 or "2 years")

    Do not include any explanation, formatting, markdown, or line breaks. Output only the raw
    comma-separated values described above.

    Resume:
    """.formatted(LocalDate.now());

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * Odešle text životopisu do Gemini API a vrátí surovou textovou odpověď modelu.
     */
    public String analyzeResumeText(String resumeText) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> body = Map.of(
               "contents", new Object[]{
                           Map.of("parts", new Object[]{
                                   Map.of("text", prompt + resumeText),
                           })
                    }
            );

            HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);
            ResponseEntity<String> response = restTemplate.exchange(
                    apiLink + apiKey, HttpMethod.POST, request, String.class
            );

            JsonNode json = objectMapper.readTree(response.getBody());
            String geminiAnswer = json
                    .path("candidates").get(0)
                    .path("content")
                    .path("parts").get(0)
                    .path("text")
                    .asText();
            return geminiAnswer;
        } catch (Exception e) {
            throw new RuntimeException("Error while Geminis analyzing resume text " + e);
        }
    }

}
