package com.notfound.stackoverflowclone.question.mapper;

import com.notfound.stackoverflowclone.question.dto.QuestionDto;
import com.notfound.stackoverflowclone.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question postDtoToEntity(QuestionDto.Post postDto);

    QuestionDto.Response entityToResponseDto(Question question);
}
