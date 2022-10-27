package com.notfound.stackoverflowclone.user.controller;

import com.notfound.stackoverflowclone.user.dto.UserDto;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.mapper.UserMapper;
import com.notfound.stackoverflowclone.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Validated
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;


//회원가입
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto.Response postUser(@Valid @RequestBody UserDto.Post requestDto){
        User user = mapper.postDtoToEntity(requestDto);
        User createdUser = userService.saveUser(user);
        return mapper.EntityToResponseDto(createdUser);
    }

    @GetMapping("/{user-id}")
    @ResponseStatus(HttpStatus.OK)
    public UserDto.Response getUser(
            @PathVariable("user-id") @Positive Long userId){
        User user = userService.findVerifiedUser(userId);
        return mapper.EntityToResponseDto(user);
    }
}
