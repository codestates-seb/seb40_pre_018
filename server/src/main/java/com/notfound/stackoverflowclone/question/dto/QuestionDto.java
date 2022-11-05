package com.notfound.stackoverflowclone.question.dto;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.user.dto.UserDto;
import lombok.*;

import javax.validation.constraints.NotBlank;
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
    @Setter
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
        @Builder.Default
        private Boolean isUpVoter = false;
        @Builder.Default
        private Boolean isDownVoter = false;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private List<AnswerDto.Response> answers;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Post {
        @NotBlank
        private String title;
        @NotBlank
        private String content;
    }

}
