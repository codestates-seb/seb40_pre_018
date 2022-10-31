package com.notfound.stackoverflowclone.answer.controller;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.mapper.AnswerMapper;
import com.notfound.stackoverflowclone.answer.service.AnswerService;
import com.notfound.stackoverflowclone.vote.dto.VoteDto;
import com.notfound.stackoverflowclone.vote.entity.Vote;
import com.notfound.stackoverflowclone.vote.mapper.VoteMapper;
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
    private final VoteMapper voteMapper;

    @PostMapping("/questions/{question-id}/answers")
    @ResponseStatus(HttpStatus.CREATED)
    public AnswerDto.Response postAnswer(
            @RequestHeader(name = "Authorization") Long userId,
            @PathVariable("question-id") @Positive Long questionId,
            @Valid @RequestBody AnswerDto.Post postDto){
        Answer answer = mapper.postDtoToEntity(postDto);
        return mapper.entityToResponseDto(answerService.saveAnswer(answer, userId, questionId));
    }

    @DeleteMapping("/questions/{question-id}/answers/{answer-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void deleteAnswer(@PathVariable(name = "answer-id") Long answerId,
                      @RequestHeader(name = "Authorization") Long userId){
        answerService.deleteAnswer(answerId,userId);
    }

    @PostMapping("/answers/{answer-id}")
    @ResponseStatus(HttpStatus.CREATED)
    public VoteDto.Response postAnswerVote(
            @RequestHeader(name = "Authorization") Long userId,
            @PathVariable("answer-id") Long answerId,
            @Valid @RequestBody VoteDto.Patch patchDto){
        Vote vote = voteMapper.patchDtoToEntity(patchDto);
        return voteMapper.entityToResponseDto(answerService.saveVote(answerId,userId,vote.getAmount()));
    }
}
