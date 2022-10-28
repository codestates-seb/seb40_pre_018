package com.notfound.stackoverflowclone.answer.dto;


import com.notfound.stackoverflowclone.answer.entity.AnswerStatus;
import com.notfound.stackoverflowclone.user.entity.User;
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
        private Long answerId;
        private String content;
        private AnswerStatus answerStatus;
        private User author;
        private int vote;
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
