package com.notfound.stackoverflowclone.vote.dto;

import com.notfound.stackoverflowclone.user.dto.UserDto;
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
        private UserDto.Response voter;
        private int voteCount;
        private int amount;
        private boolean isUpVoter;
        private boolean isDownVoter;
    }
    public static class Post{
    }
}