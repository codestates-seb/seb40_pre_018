package com.notfound.stackoverflowclone.vote.controller;

import com.notfound.stackoverflowclone.auth.jwt.JwtTokenizer;
import com.notfound.stackoverflowclone.vote.dto.VoteDto;
import com.notfound.stackoverflowclone.vote.service.VoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@Validated
@RequiredArgsConstructor
public class VoteController {
    private final VoteService voteService;
    private final JwtTokenizer jwtTokenizer;

    @PostMapping("/questions/{question-id}/upvotes")
    @ResponseStatus(HttpStatus.CREATED)
    public VoteDto.QuestionResponse postQuestionUpVote(
            @RequestHeader(name = "Authorization") String token,
            @PathVariable("question-id") Long questionId){
        return voteService.saveQuestionVote(questionId,jwtTokenizer.getUserId(token),1);
    }
    @PostMapping("/questions/{question-id}/downvotes")
    @ResponseStatus(HttpStatus.CREATED)
    public VoteDto.QuestionResponse postQuestionDownVote(
            @RequestHeader(name = "Authorization") String token,
            @PathVariable("question-id") Long questionId){
        return voteService.saveQuestionVote(questionId, jwtTokenizer.getUserId(token),-1);
    }

    @PostMapping("/answers/{answer-id}/upvotes")
    @ResponseStatus(HttpStatus.CREATED)
    public VoteDto.AnswerResponse postAnswerUpVote(
            @RequestHeader(name = "Authorization") String token,
            @PathVariable("answer-id") Long answerId){
        return voteService.saveAnswerVote(answerId,jwtTokenizer.getUserId(token),1);
    }
    @PostMapping("/answers/{answer-id}/downvotes")
    @ResponseStatus(HttpStatus.CREATED)
    public VoteDto.AnswerResponse postAnswerDownVote(
            @RequestHeader(name = "Authorization") String token,
            @PathVariable("answer-id") Long answerId){
        return voteService.saveAnswerVote(answerId, jwtTokenizer.getUserId(token),-1);
    }
}
