package com.notfound.stackoverflowclone.question.dto;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.user.dto.UserDto;
import lombok.*;

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
        private int voteCount;
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
        private int voteCount;
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



    @Builder
    @NoArgsConstructor
    @Getter
    @AllArgsConstructor
    public static class Patch {
        private Long questionId;
        private String title;
        private String content;

        public void setQuestionId(Long questionId) {this.questionId = questionId;}
    }



}
