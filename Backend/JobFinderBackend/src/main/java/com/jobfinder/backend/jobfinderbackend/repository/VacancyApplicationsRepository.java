package com.jobfinder.backend.jobfinderbackend.repository;

import com.jobfinder.backend.jobfinderbackend.models.User;
import com.jobfinder.backend.jobfinderbackend.models.Vacancy;
import com.jobfinder.backend.jobfinderbackend.models.VacancyApplications;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VacancyApplicationsRepository extends JpaRepository<VacancyApplications, Long> {

    List<VacancyApplications> findByUser(User user);

    boolean existsByVacancyAndUser(Vacancy vacancy, User user);

    List<VacancyApplications> findByVacancy(Vacancy vacancy);
}
