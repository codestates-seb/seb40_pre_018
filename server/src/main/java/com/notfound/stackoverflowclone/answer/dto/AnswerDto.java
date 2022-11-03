package com.notfound.stackoverflowclone.answer.dto;


import com.notfound.stackoverflowclone.user.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long answerId;
        private String content;
        private UserDto.Response author;
        private int voteCount;
        private boolean isUpVoter;
        private boolean isDownVoter;
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
}
