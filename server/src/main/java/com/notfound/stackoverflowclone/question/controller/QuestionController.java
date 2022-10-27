package com.notfound.stackoverflowclone.question.controller;

import com.notfound.stackoverflowclone.dto.MultiResponseDto;
import com.notfound.stackoverflowclone.question.dto.QuestionDto;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.question.mapper.QuestionMapper;
import com.notfound.stackoverflowclone.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    QuestionDto.Response postQuestion(@RequestHeader(name = "Authorization") Long userId,
                                      @RequestBody QuestionDto.Post requestDto) {
        Question question = mapper.postDtoToEntity(requestDto);
        return mapper.entityToResponseDto(questionService.saveQuestion(question, userId));
    }

    @GetMapping("/{question-id}")
    @ResponseStatus(HttpStatus.OK)
    QuestionDto.Response getQuestion(@PathVariable("question-id") Long questionId) {
        return mapper.entityToResponseDto(questionService.findViewedQuestion(questionId));
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    MultiResponseDto<QuestionDto.Response>
    getQuestions(@RequestParam(required = false, defaultValue = "1") Integer page,
                 @RequestParam(required = false, defaultValue = "15") Integer size) {
        Page<Question> pagedQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pagedQuestions.getContent();
        return MultiResponseDto.of(mapper.entityListToResponseDtoList(questions), pagedQuestions);
    }
}
