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
    public static class Response {
        private Long answerId;
        private Long voterId;
        private int voteCount;
        private boolean isUpVoter;
        private boolean isDownVoter;
    }
    public static class Post{
    }
}