package com.notfound.stackoverflowclone.question.mapper;

import com.notfound.stackoverflowclone.question.dto.QuestionDto;
import com.notfound.stackoverflowclone.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question postDtoToEntity(QuestionDto.Post postDto);

    QuestionDto.Response entityToResponseDto(Question question);

    List<QuestionDto.Response> entityListToResponseDtoList(List<Question> questions);
}
