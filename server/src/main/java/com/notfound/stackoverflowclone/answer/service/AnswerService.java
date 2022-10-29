package com.notfound.stackoverflowclone.answer.service;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.answer.repository.AnswerRepository;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
}
