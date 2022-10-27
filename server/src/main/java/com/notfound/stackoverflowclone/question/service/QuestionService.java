package com.notfound.stackoverflowclone.question.service;

import com.notfound.stackoverflowclone.exception.BusinessLogicException;
import com.notfound.stackoverflowclone.exception.ExceptionCode;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.question.repository.QuestionRepository;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final UserService userService;

    public Question saveQuestion(Question question, Long userId) {
        User findUser = userService.findVerifiedUser(userId);
        Question madeQuestion = createQuestion(question, findUser);
        return questionRepository.save(madeQuestion);
    }

    private Question createQuestion(Question question, User user) {
        question.setAuthor(user);
        user.getQuestions().add(question);
        return question;
    }

    public Question findVerifiedQuestion(Long questionId) {
        return questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    public Question findQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        findQuestion.setClicks(findQuestion.getClicks() + 1);
        return findQuestion;
    }

}
