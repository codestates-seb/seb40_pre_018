package com.notfound.stackoverflowclone.vote.controller;

import com.notfound.stackoverflowclone.vote.dto.VoteDto;
import com.notfound.stackoverflowclone.vote.entity.Vote;
import com.notfound.stackoverflowclone.vote.mapper.VoteMapper;
import com.notfound.stackoverflowclone.vote.service.VoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping
@Validated
@RequiredArgsConstructor
public class VoteController {
    private final VoteService voteService;
    private final VoteMapper voteMapper;

    @PostMapping("/answers/{answer-id}/votes")
    @ResponseStatus(HttpStatus.CREATED)
    public VoteDto.Response postAnswerVote(
            @RequestHeader(name = "Authorization") Long userId,
            @PathVariable("answer-id") Long answerId,
            @Valid @RequestBody VoteDto.Patch patchDto){
        Vote vote = voteMapper.patchDtoToEntity(patchDto);
        return voteMapper.entityToResponseDto(voteService.saveVote(answerId,userId,vote.getAmount()));
    }
}
