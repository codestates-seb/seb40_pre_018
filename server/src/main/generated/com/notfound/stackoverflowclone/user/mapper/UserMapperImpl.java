package com.notfound.stackoverflowclone.user.mapper;

import com.notfound.stackoverflowclone.user.dto.UserDto;
import com.notfound.stackoverflowclone.user.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-05T17:53:04+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.17 (Amazon.com Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User postDtoToEntity(UserDto.Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.email( postDto.getEmail() );
        user.password( postDto.getPassword() );
        user.displayName( postDto.getDisplayName() );

        return user.build();
    }

    @Override
    public UserDto.Response EntityToResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto.Response.ResponseBuilder response = UserDto.Response.builder();

        response.userId( user.getUserId() );
        response.displayName( user.getDisplayName() );
        response.email( user.getEmail() );
        response.userStatus( user.getUserStatus() );
        response.createdAt( user.getCreatedAt() );

        return response.build();
    }
}
