package com.notfound.stackoverflowclone.answer.dto;


import com.notfound.stackoverflowclone.user.dto.UserDto;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class DetailResponse {
        private Long answerId;
        private String content;
        private UserDto.Response author;
        private int voteCount;
        @Builder.Default
        private Boolean isUpVoter = false;
        @Builder.Default
        private Boolean isDownVoter = false;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long answerId;
        private String content;
        private UserDto.Response author;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Post {

        @NotBlank(message = "Content is missing.")
        private String content;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Patch {
        private Long answerId;
        @NotBlank(message = "Content is missing.")
        private String content;
        public void setAnswerId(Long answerId) {this.answerId = answerId;}
    }

}
