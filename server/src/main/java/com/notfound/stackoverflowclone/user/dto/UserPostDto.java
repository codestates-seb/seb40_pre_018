package com.notfound.stackoverflowclone.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserPostDto {
    @NotBlank(message = "Email cannot be empty.")
    @Email
    private String email;

    private String displayName;

    @NotBlank(message = "Password cannot be empty")
    private  String password;
}