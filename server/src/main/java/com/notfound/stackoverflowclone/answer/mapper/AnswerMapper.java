package com.notfound.stackoverflowclone.answer.mapper;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer postDtoToEntity(AnswerDto.Post postDto);

    Answer patchDtoToEntity(AnswerDto.Patch patchDto);

    AnswerDto.DetailResponse entityToDetailResponseDto(Answer answer);

    AnswerDto.Response entityToResponseDto(Answer answer);
}
