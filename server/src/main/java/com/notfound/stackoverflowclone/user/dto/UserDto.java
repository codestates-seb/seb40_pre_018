package com.notfound.stackoverflowclone.user.dto;

import com.notfound.stackoverflowclone.user.entity.UserStatus;
import lombok.*;

public class UserDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long userId;
        private String displayName;
        private String email;
        private UserStatus userStatus;
    }
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Post {
        private String email;
        private String displayName;
    }
}