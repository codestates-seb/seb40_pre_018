package com.notfound.stackoverflowclone.answer.mapper;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer postDtoToEntity(AnswerDto.Post postDto);

    AnswerDto.Response entityToResponseDto(Answer answer);
}
