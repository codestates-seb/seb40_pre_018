package com.notfound.stackoverflowclone.user.mapper;

import com.notfound.stackoverflowclone.user.dto.UserDto;
import com.notfound.stackoverflowclone.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User postDtoToEntity(UserDto.Post postDto);

    UserDto.Response EntityToResponseDto(User user);
}
