package com.notfound.stackoverflowclone.question.service;

import com.notfound.stackoverflowclone.answer.dto.AnswerDto;
import com.notfound.stackoverflowclone.answer.mapper.AnswerMapper;
import com.notfound.stackoverflowclone.exception.BusinessLogicException;
import com.notfound.stackoverflowclone.exception.ExceptionCode;
import com.notfound.stackoverflowclone.question.dto.QuestionDto;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.question.mapper.QuestionMapper;
import com.notfound.stackoverflowclone.question.repository.QuestionRepository;
import com.notfound.stackoverflowclone.user.dto.UserDto;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.mapper.UserMapper;
import com.notfound.stackoverflowclone.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final UserService userService;
    private final QuestionMapper questionMapper;
    private final AnswerMapper answerMapper;

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

    public QuestionDto.DetailResponse findQuestionWithDto(Long questionId, Long userId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        QuestionDto.DetailResponse response = questionMapper.entityToDetailResponseDto(findQuestion);
        if (userId != null) {
            response.setAnswers(
                    findQuestion.getAnswers().stream()
                            .map(answer -> {
                                AnswerDto.Response responseDto = answerMapper.entityToResponseDto(answer);
                                responseDto.setIsUpVoter(answer.getVotes().stream()
                                        .filter(vote -> vote.getAmount() == 1)
                                        .map(vote -> vote.getVoter().getUserId()).collect(Collectors.toList())
                                        .contains(userId));
                                responseDto.setIsDownVoter(answer.getVotes().stream()
                                        .filter(vote -> vote.getAmount() == -1)
                                        .map(vote -> vote.getVoter().getUserId()).collect(Collectors.toList())
                                        .contains(userId));
                                return responseDto;
                            }).collect(Collectors.toList())
            );
        }
        return response;
    }

    public Question findViewedQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        findQuestion.setViews(findQuestion.getViews() + 1);
        return findQuestion;
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    public void deleteQuestion(Long questionId, Long userId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        optionalQuestion.ifPresentOrElse(question -> {
            if (!Objects.equals(question.getAuthor().getUserId(), userId)) {
                throw new BusinessLogicException(ExceptionCode.USER_UNAUTHORIZED);
            }
            questionRepository.delete(question);

        }, () -> {
            return;
        });
    }

    public Page<Question> findQuestionSearchByTitleOrContent(String title, String content, int page, int size) {
        return questionRepository.findAllByTitleContainsOrContentContains(title, content,
                PageRequest.of(page, size, Sort.by("questionId").descending()));
    }
}
