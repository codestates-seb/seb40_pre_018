package com.notfound.stackoverflowclone.answer.mapper;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.answer.entity.Answer;
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
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer postDtoToEntity(AnswerDto.Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        Answer.AnswerBuilder answer = Answer.builder();

        answer.content( postDto.getContent() );

        return answer.build();
    }

    @Override
    public AnswerDto.Response entityToResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerDto.Response.ResponseBuilder response = AnswerDto.Response.builder();

        response.answerId( answer.getAnswerId() );
        response.content( answer.getContent() );
        response.author( userToResponse( answer.getAuthor() ) );
        response.voteCount( answer.getVoteCount() );
        response.createdAt( answer.getCreatedAt() );
        response.updatedAt( answer.getUpdatedAt() );

        return response.build();
    }

    protected UserDto.Response userToResponse(User user) {
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
