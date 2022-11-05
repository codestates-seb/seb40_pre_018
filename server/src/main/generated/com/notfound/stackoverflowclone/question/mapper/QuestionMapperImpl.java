package com.notfound.stackoverflowclone.question.mapper;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.question.dto.QuestionDto;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.user.dto.UserDto;
import com.notfound.stackoverflowclone.user.entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-05T21:19:54+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.17 (Amazon.com Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question postDtoToEntity(QuestionDto.Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.title( postDto.getTitle() );
        question.content( postDto.getContent() );

        return question.build();
    }

    @Override
    public Question patchDtoToEntity(QuestionDto.Patch patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.questionId( patchDto.getQuestionId() );
        question.title( patchDto.getTitle() );
        question.content( patchDto.getContent() );

        return question.build();
    }

    @Override
    public QuestionDto.Response entityToResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionDto.Response.ResponseBuilder response = QuestionDto.Response.builder();

        response.questionId( question.getQuestionId() );
        response.author( userToResponse( question.getAuthor() ) );
        response.title( question.getTitle() );
        response.content( question.getContent() );
        response.views( question.getViews() );
        response.createdAt( question.getCreatedAt() );
        response.updatedAt( question.getUpdatedAt() );

        return response.build();
    }

    @Override
    public List<QuestionDto.Response> entityListToResponseDtoList(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.Response> list = new ArrayList<QuestionDto.Response>( questions.size() );
        for ( Question question : questions ) {
            list.add( entityToResponseDto( question ) );
        }

        return list;
    }

    @Override
    public QuestionDto.DetailResponse entityToDetailResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionDto.DetailResponse.DetailResponseBuilder detailResponse = QuestionDto.DetailResponse.builder();

        detailResponse.questionId( question.getQuestionId() );
        detailResponse.author( userToResponse( question.getAuthor() ) );
        detailResponse.title( question.getTitle() );
        detailResponse.content( question.getContent() );
        detailResponse.views( question.getViews() );
        detailResponse.createdAt( question.getCreatedAt() );
        detailResponse.updatedAt( question.getUpdatedAt() );
        detailResponse.answers( answerListToResponseList( question.getAnswers() ) );

        return detailResponse.build();
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

    protected AnswerDto.Response answerToResponse(Answer answer) {
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

    protected List<AnswerDto.Response> answerListToResponseList(List<Answer> list) {
        if ( list == null ) {
            return null;
        }

        List<AnswerDto.Response> list1 = new ArrayList<AnswerDto.Response>( list.size() );
        for ( Answer answer : list ) {
            list1.add( answerToResponse( answer ) );
        }

        return list1;
    }
}
