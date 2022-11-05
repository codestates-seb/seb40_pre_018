package com.notfound.stackoverflowclone.vote.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class VoteDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class QuestionResponse {
        private Long questionId;
        private Long voterId;
        private int voteCount;
        private Boolean isUpVoter;
        private Boolean isDownVoter;
    }
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class AnswerResponse {
        private Long answerId;
        private Long voterId;
        private int voteCount;
        private Boolean isUpVoter;
        private Boolean isDownVoter;
    }
}