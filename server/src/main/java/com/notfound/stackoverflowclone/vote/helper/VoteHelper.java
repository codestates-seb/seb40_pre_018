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
        int sum=0;
        Answer answer = answerService.findVerifiedAnswer(answerId);
        List<Vote> votes = answer.getVotes();
        for (Vote vote : votes) {
            sum += vote.getAmount();
        }
        return sum;
    }
}
