package com.notfound.stackoverflowclone.vote.service;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.repository.AnswerRepository;
import com.notfound.stackoverflowclone.exception.BusinessLogicException;
import com.notfound.stackoverflowclone.exception.ExceptionCode;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.service.UserService;
import com.notfound.stackoverflowclone.vote.entity.Vote;
import com.notfound.stackoverflowclone.vote.repository.VoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class VoteService {
    public final VoteRepository voteRepository;
    public final UserService userService;
    public final AnswerRepository answerRepository;
    public Vote saveVote(Long answerId, Long userId, int amount) {

        Vote createdVote = createVote(answerId, userId, amount);
        return voteRepository.save(createdVote);
    }

    private Vote createVote(Long answerId, Long userId, int amount) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        User findUser = userService.findVerifiedUser(userId);
        return Vote.builder()
                .voter(findUser)
                .answer(findAnswer)
                .amount(amount)
                .build();
    }
    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
