package com.notfound.stackoverflowclone.answer.service;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.repository.AnswerRepository;
import com.notfound.stackoverflowclone.exception.BusinessLogicException;
import com.notfound.stackoverflowclone.exception.ExceptionCode;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.question.service.QuestionService;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.service.UserService;
import com.notfound.stackoverflowclone.vote.entity.Vote;
import com.notfound.stackoverflowclone.vote.repository.VoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Objects;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final UserService userService;
    private final QuestionService questionService;
    private final VoteRepository voteRepository;

    public Answer saveAnswer(Answer answer, Long userId, Long questionId) {
        User findUser = userService.findVerifiedUser(userId);
        Question findQuestion = questionService.findVerifiedQuestion(questionId);
        Answer madeAnswer = createAnswer(answer, findQuestion, findUser);
        return answerRepository.save(madeAnswer);
    }

    private Answer createAnswer(Answer answer, Question question, User user) {
        Answer createdAnswer = Answer.builder()
                .content(answer.getContent()) //추후 answerDto.Post에 필드 추가시에 수정필요한부분
                .author(user)
                .question(question)
                .build();
        user.getAnswers().add(createdAnswer);
        question.getAnswers().add(createdAnswer);
        return createdAnswer;
    }

    public void deleteAnswer(Long answerId, Long userId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        optionalAnswer.ifPresentOrElse(answer -> {
            if (!Objects.equals(answer.getAuthor().getUserId(), userId)) {
                throw new BusinessLogicException(ExceptionCode.USER_UNAUTHORIZED);
            }
            answerRepository.delete(answer);
        }, () -> {
            return;
        });
    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

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
//추후에 필요하면 사용하고 아니면 지울예정
//    public Vote findVerifiedVote(long voteId) {
//        Optional<Vote> optionalVote =
//                voteRepository.findById(voteId);
//        Vote findVote =
//                optionalVote.orElseThrow(() ->
//                        new BusinessLogicException(ExceptionCode.VOTE_NOT_FOUND));
//        return findVote;
//    }
}
