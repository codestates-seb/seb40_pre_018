package com.notfound.stackoverflowclone.answer.mapper;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer postDtoToEntity(AnswerDto.Post postDto, Question question);

    AnswerDto.Response entityToResponseDto(Answer answer);
}
