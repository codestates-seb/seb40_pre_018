package com.notfound.stackoverflowclone.vote.controller;

import com.notfound.stackoverflowclone.vote.dto.VoteDto;
import com.notfound.stackoverflowclone.vote.mapper.VoteMapper;
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
    private final VoteMapper voteMapper;

    @PostMapping("/answers/{answer-id}/upvotes")
    @ResponseStatus(HttpStatus.CREATED)
    public VoteDto.Response postAnswerUpVote(
            @RequestHeader(name = "Authorization") Long userId,
            @PathVariable("answer-id") Long answerId){
        return voteMapper.entityToResponseDto(voteService.saveVote(answerId,userId,1));
    }
    @PostMapping("/answers/{answer-id}/downvotes")
    @ResponseStatus(HttpStatus.CREATED)
    public VoteDto.Response postAnswerDownVote(
            @RequestHeader(name = "Authorization") Long userId,
            @PathVariable("answer-id") Long answerId){
        return voteMapper.entityToResponseDto(voteService.saveVote(answerId,userId,-1));
    }
}
