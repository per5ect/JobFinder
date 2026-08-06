package com.jobfinder.backend.jobfinderbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserApplicationsDTO {
    private Long vacancyId;
    private String vacancyTitle;
    private String applicationStatus;
}
