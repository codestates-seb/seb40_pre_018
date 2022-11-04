package com.notfound.stackoverflowclone.vote.service;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.repository.AnswerRepository;
import com.notfound.stackoverflowclone.answer.service.AnswerService;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.question.service.QuestionService;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.service.UserService;
import com.notfound.stackoverflowclone.vote.dto.VoteDto;
import com.notfound.stackoverflowclone.vote.entity.Vote;
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
    public final QuestionService questionService;

    public VoteDto.QuestionResponse saveQuestionVote(Long questionId, Long userId, int amount) {
        Question findQuestion = questionService.findVerifiedQuestion(questionId);
        User findUser = userService.findVerifiedUser(userId);
        List<Vote> votes = voteRepository.findAllByVoterAndQuestion(findUser, findQuestion);
        if(votes.isEmpty()){
            Vote createdVote = createVote(findQuestion, findUser, amount);
            voteRepository.save(createdVote);
            return VoteDto.QuestionResponse.builder()
                    .voterId(userId)
                    .voteCount(voteRepository
                            .findAllByQuestion(findQuestion)
                            .stream()
                            .mapToInt(Vote::getAmount)
                            .sum())
                    .isUpVoter(amount==1)
                    .isDownVoter(amount==-1)
                    .questionId(questionId)
                    .build();
        }
        else{
            voteRepository.deleteAll(votes);
            return VoteDto.QuestionResponse.builder()
                    .voterId(userId)
                    .voteCount(voteRepository
                            .findAllByQuestion(findQuestion)
                            .stream()
                            .mapToInt(Vote::getAmount)
                            .sum())
                    .isUpVoter(false)
                    .isDownVoter(false)
                    .questionId(questionId)
                    .build();
        }
    }
    public VoteDto.AnswerResponse saveAnswerVote(Long answerId, Long userId, int amount) {
        Answer findAnswer = answerService.findVerifiedAnswer(answerId);
        User findUser = userService.findVerifiedUser(userId);
        List<Vote> votes = voteRepository.findAllByVoterAndAnswer(findUser,findAnswer);
        if(votes.isEmpty()){
            Vote createdVote = createVote(findAnswer, findUser, amount);
            voteRepository.save(createdVote);
            return VoteDto.AnswerResponse.builder()
                    .voterId(userId)
                    .voteCount(voteRepository
                            .findAllByAnswer(findAnswer)
                            .stream()
                            .mapToInt(Vote::getAmount)
                            .sum())
                    .isUpVoter(amount==1)
                    .isDownVoter(amount==-1)
                    .answerId(answerId)
                    .build();
        }
        else{
            voteRepository.deleteAll(votes);
            return VoteDto.AnswerResponse.builder()
                    .voteCount(voteRepository
                            .findAllByAnswer(findAnswer)
                            .stream()
                            .mapToInt(Vote::getAmount)
                            .sum())
                    .isUpVoter(false)
                    .isDownVoter(false)
                    .answerId(answerId)
                    .voterId(userId)
                    .build();
        }
    }

    private Vote createVote(Question question, User user, int amount) {
        return Vote.builder()
                .voter(user)
                .question(question)
                .amount(amount)
                .build();
    }

    private Vote createVote(Answer answer, User user, int amount) {
        return Vote.builder()
                .voter(user)
                .answer(answer)
                .amount(amount)
                .build();
    }
}
