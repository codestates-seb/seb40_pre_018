package com.notfound.stackoverflowclone.vote.helper;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.service.AnswerService;
import com.notfound.stackoverflowclone.vote.entity.Vote;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class VoteHelper {
    private final AnswerService answerService;

    public int voteCalculator(Long answerId){
        Answer answer = answerService.findVerifiedAnswer(answerId);
        List<Vote> votes = answer.getVotes();
        Integer sum = votes.stream().mapToInt(Vote::getAmount).reduce(0, Integer::sum);
        return sum;
    }
}
