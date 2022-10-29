package com.notfound.stackoverflowclone.answer.service;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.repository.AnswerRepository;
import com.notfound.stackoverflowclone.exception.BusinessLogicException;
import com.notfound.stackoverflowclone.exception.ExceptionCode;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.question.service.QuestionService;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.service.UserService;
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

    public Answer saveAnswer(Answer answer, Long userId, Long questionId){
        User findUser = userService.findVerifiedUser(userId);
        Question question = questionService.findVerifiedQuestion(questionId);
        Answer madeAnswer = createAnswer(answer, findUser);
        madeAnswer.builder()
                .question(question)
                .build();
        return answerRepository.save(madeAnswer);
    }
    private Answer createAnswer(Answer answer, User user) {
        answer.setAuthor(user);
        user.getAnswers().add(answer);
        return answer;
    }

    public void deleteAnswer(Long answerId, Long userId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        optionalAnswer.ifPresentOrElse(answer -> {
                    if (!Objects.equals(answer.getAuthor().getUserId(), userId)) {
                        throw new BusinessLogicException(ExceptionCode.USER_UNAUTHORIZED);
                    }
                    answerRepository.delete(answer);
                },() -> {
            return;
                });
    }
}
