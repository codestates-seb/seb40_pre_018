package com.notfound.stackoverflowclone.answer.controller;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.mapper.AnswerMapper;
import com.notfound.stackoverflowclone.answer.service.AnswerService;
import com.notfound.stackoverflowclone.auth.jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping
@Validated
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;
    private final JwtTokenizer jwtTokenizer;

    @PostMapping("/questions/{question-id}/answers")
    @ResponseStatus(HttpStatus.CREATED)
    public AnswerDto.Response postAnswer(
            @RequestHeader(name = "Authorization") String token,
            @PathVariable("question-id") @Positive Long questionId,
            @Valid @RequestBody AnswerDto.Post postDto){
        Answer answer = mapper.postDtoToEntity(postDto);
        return mapper.entityToResponseDto(answerService.saveAnswer(answer, jwtTokenizer.getUserId(token), questionId));
    }

    @PatchMapping("/answers/{answer-id}")
    @ResponseStatus(HttpStatus.OK)
    public AnswerDto.Response patchAnswer(
            @RequestHeader(name = "Authorization") String token,
            @PathVariable("answer-id") @Positive Long answerId,
            @Valid @RequestBody AnswerDto.Patch patchDto) {
        patchDto.setAnswerId(answerId);
        Answer answer = mapper.patchDtoToEntity(patchDto);
        return mapper.entityToResponseDto(answerService.updateAnswer(answer, jwtTokenizer.getUserId(token), answerId));
    }

    @DeleteMapping("/answers/{answer-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void deleteAnswer(@PathVariable(name = "answer-id") Long answerId,
                      @RequestHeader(name = "Authorization") String token){
        answerService.deleteAnswer(answerId, jwtTokenizer.getUserId(token));
    }
}
