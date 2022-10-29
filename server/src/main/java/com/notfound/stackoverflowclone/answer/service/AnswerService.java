package com.notfound.stackoverflowclone.answer.service;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.repository.AnswerRepository;
import com.notfound.stackoverflowclone.exception.BusinessLogicException;
import com.notfound.stackoverflowclone.exception.ExceptionCode;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final UserService userService;

    public Answer saveAnswer(Answer answer, Long userId){
        User findUser = userService.findVerifiedUser(userId);
        Answer madeAnswer = createAnswer(answer, findUser);
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
