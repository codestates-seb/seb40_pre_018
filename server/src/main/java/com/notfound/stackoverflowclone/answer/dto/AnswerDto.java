package com.notfound.stackoverflowclone.answer.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class AnswerDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {

    }
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Post {
        @NotNull
        private Long questionId;

        @NotNull
        private Long userId;

        @NotBlank(message = "Body is missing.")
        private String content;
    }
}
