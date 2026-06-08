package com.jobfinder.backend.jobfinderbackend.repository;

import com.jobfinder.backend.jobfinderbackend.models.Company;
import com.jobfinder.backend.jobfinderbackend.models.Vacancy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VacancyRepository extends JpaRepository<Vacancy, Long> {
    public void deleteVacancyById(Long id);

    @Query("SELECT v FROM Vacancy v WHERE v.workExperience <= :experience")
    List<Vacancy> findVacanciesByMaxExperience(@Param("experience") Integer experience);

    List<Vacancy> findByCompany(Company company);
}
