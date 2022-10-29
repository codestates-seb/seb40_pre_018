package com.notfound.stackoverflowclone.answer.dto;


import com.notfound.stackoverflowclone.user.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

public class AnswerDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long answerId;
        private String content;
        private UserDto.Response author;
        private int vote;
    }
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Post {

        @NotBlank(message = "Content is missing.")
        private String content;
    }
}
