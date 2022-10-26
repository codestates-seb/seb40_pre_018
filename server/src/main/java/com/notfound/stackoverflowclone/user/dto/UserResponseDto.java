package com.notfound.stackoverflowclone.user.dto;

import com.notfound.stackoverflowclone.user.entity.UserStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserResponseDto {
    private String displayName;
    private String email;
    private String password;
    private UserStatus userStatus;
}