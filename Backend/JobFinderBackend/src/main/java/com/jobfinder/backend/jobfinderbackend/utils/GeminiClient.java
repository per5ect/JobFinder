package com.jobfinder.backend.jobfinderbackend.utils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Slf4j
@Component
@RequiredArgsConstructor
public class GeminiClient {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiLink;

    private final String prompt = "Analyze the following resume and return a single line containing all mentioned technologies (programming languages, tools, frameworks) separated by commas it is important that technologies are not duplicated, followed by the number of full years of work experience as the last value append the total number of full years (example 1, 2, 3 not the 1.2 or 1,1) of actual IT-related work experience as a single number in work experience include any job and internship, as long as it is related to the IT field today is 21.04.2025. it must be .Do not include any descriptions or duplicate technologies. Do not include any formatting, markdown, or line breaks. Output only the raw values. Here is the resume: ";

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public String analyzeResumeText(String resumeText) {
        try {
            log.info("[Gemini] Sending request to Gemini API...");
            log.debug("[Gemini] Resume text length: {} chars", resumeText.length());

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

            log.info("[Gemini] Response status: {}", response.getStatusCode());
            log.debug("[Gemini] Raw response body: {}", response.getBody());

            JsonNode json = objectMapper.readTree(response.getBody());
            String geminiAnswer = json
                    .path("candidates").get(0)
                    .path("content")
                    .path("parts").get(0)
                    .path("text")
                    .asText();

            log.info("[Gemini] Parsed answer: {}", geminiAnswer);
            return geminiAnswer;
        } catch (Exception e) {
            log.error("[Gemini] Error while calling Gemini API: {}", e.getMessage(), e);
            throw new RuntimeException("Error while Geminis analyzing resume text " + e);
        }
    }

}
