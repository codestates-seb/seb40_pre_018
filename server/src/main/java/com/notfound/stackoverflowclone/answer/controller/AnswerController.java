package com.notfound.stackoverflowclone.answer.controller;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.mapper.AnswerMapper;
import com.notfound.stackoverflowclone.answer.service.AnswerService;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.question.service.QuestionService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping
@Validated
@AllArgsConstructor
@RequiredArgsConstructor
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper mapper;
    private QuestionService questionService;

    @PostMapping("/questions/{question-id}/answers")
    @ResponseStatus(HttpStatus.CREATED)
    public AnswerDto.Response postAnswer(
            @PathVariable("question-id") @Positive Long questionId,
            @Valid @RequestBody AnswerDto.Post postDto){
        Question question = questionService.findVerifiedQuestion(questionId);
        Answer answer = answerService.createAnswer(
                mapper.postDtoToEntity(postDto, question)
        );
        return mapper.entityToResponseDto(answer);
    }
}
