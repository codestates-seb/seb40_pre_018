package com.notfound.stackoverflowclone.user.dto;

import com.notfound.stackoverflowclone.user.entity.UserStatus;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

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
        private LocalDateTime createdAt;
    }
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Post {
        @Email(message = "Email should not be empty.")
        private String email;

        @NotBlank
        private String password;

        private String displayName;
    }
}