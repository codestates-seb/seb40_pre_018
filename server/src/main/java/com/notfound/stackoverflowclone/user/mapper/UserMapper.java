package com.notfound.stackoverflowclone.user.mapper;

import com.notfound.stackoverflowclone.user.dto.UserPostDto;
import com.notfound.stackoverflowclone.user.dto.UserResponseDto;
import com.notfound.stackoverflowclone.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    default User userPostDtoToUser(UserPostDto userPostDto){
        User user = new User();
        user.setEmail(userPostDto.getEmail());
        user.setDisplayName(userPostDto.getDisplayName());
        user.setPassword(userPostDto.getPassword());

        return user;
    }
}
