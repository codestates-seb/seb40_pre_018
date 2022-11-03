package com.notfound.stackoverflowclone.vote.service;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.repository.AnswerRepository;
import com.notfound.stackoverflowclone.answer.service.AnswerService;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.service.UserService;
import com.notfound.stackoverflowclone.vote.dto.VoteDto;
import com.notfound.stackoverflowclone.vote.entity.Vote;
import com.notfound.stackoverflowclone.vote.mapper.VoteMapper;
import com.notfound.stackoverflowclone.vote.repository.VoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class VoteService {
    public final VoteRepository voteRepository;
    public final UserService userService;
    public final AnswerRepository answerRepository;
    public final AnswerService answerService;
    public final VoteMapper voteMapper;
    public VoteDto.Response saveAnswerVote(Long answerId, Long userId, int amount) {
        Answer findAnswer = answerService.findVerifiedAnswer(answerId);
        User findUser = userService.findVerifiedUser(userId);
        List<Vote> votes = voteRepository.findAllByVoterAndAnswer(findUser,findAnswer);
        if(votes.isEmpty()){
            Vote createdVote = createVote(findAnswer, findUser, amount);
            voteRepository.save(createdVote);
            return VoteDto.Response.builder()
                    .voterId(userId)
                    .voteCount(findAnswer.getVoteCount())
                    .isUpVoter(amount==1)
                    .isDownVoter(amount==-1)
                    .answerId(answerId)
                    .amount(amount)
                    .build();
        }
        else{
            voteRepository.deleteAll(votes);
            return VoteDto.Response.builder()
                    .voteCount(findAnswer.getVoteCount())
                    .isUpVoter(false)
                    .isDownVoter(false)
                    .answerId(answerId)
                    .voterId(userId)
                    .build();
        }
    }

    private Vote createVote(Answer answer, User user, int amount) {
        return Vote.builder()
                .voter(user)
                .answer(answer)
                .amount(amount)
                .build();
    }
}
