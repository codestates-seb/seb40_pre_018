package com.notfound.stackoverflowclone.question.dto;

import com.notfound.stackoverflowclone.user.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
