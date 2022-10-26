package com.notfound.stackoverflowclone.user.controller;

import com.notfound.stackoverflowclone.user.dto.UserPostDto;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.mapper.UserMapper;
import com.notfound.stackoverflowclone.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
@Validated
@Slf4j
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }
//회원가입
    @PostMapping
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto){
        User user = mapper.userPostDtoToUser(userPostDto);
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(
                mapper.userToUserResponseDto(createdUser),
                HttpStatus.CREATED);
    }
}
