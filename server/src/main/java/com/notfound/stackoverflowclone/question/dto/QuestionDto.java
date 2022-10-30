package com.notfound.stackoverflowclone.question.dto;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.user.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long questionId;
        private UserDto.Response author;
        private String title;
        private String content;
        private Long views;
        private int vote;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class DetailResponse {
        private Long questionId;
        private UserDto.Response author;
        private String title;
        private String content;
        private Long views;
        private int vote;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private List<AnswerDto.Response> answers;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Post {
        private String title;
        private String content;
    }

}
