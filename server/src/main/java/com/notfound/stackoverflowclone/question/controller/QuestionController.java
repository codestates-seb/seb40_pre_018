package com.notfound.stackoverflowclone.question.controller;

import com.notfound.stackoverflowclone.auth.jwt.JwtTokenizer;
import com.notfound.stackoverflowclone.dto.MultiResponseDto;
import com.notfound.stackoverflowclone.question.dto.QuestionDto;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.question.mapper.QuestionMapper;
import com.notfound.stackoverflowclone.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final JwtTokenizer jwtTokenizer;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    QuestionDto.Response postQuestion(@RequestHeader(name = "Authorization") String token,
                                      @RequestBody QuestionDto.Post requestDto) {
        Question question = mapper.postDtoToEntity(requestDto);
        return mapper.entityToResponseDto(questionService.saveQuestion(question, jwtTokenizer.getUserId(token)));
    }

    @PatchMapping("/{question-id}")
    @ResponseStatus(HttpStatus.OK)
    QuestionDto.Response patchQuestion(@PathVariable("question-id") Long questionId,
                                              @RequestHeader(name = "Authorization") String token,
                                       @RequestBody QuestionDto.Patch requestDto) {
        requestDto.setQuestionId(questionId);
        Question question = mapper.patchDtoToEntity(requestDto);

        return mapper.entityToResponseDto(questionService.updateQuestion(question, jwtTokenizer.getUserId(token)));
    }

    @GetMapping("/{question-id}")
    @ResponseStatus(HttpStatus.OK)
    QuestionDto.DetailResponse getQuestion(@PathVariable("question-id") Long questionId) {
        return mapper.entityToDetailResponseDto(questionService.findViewedQuestion(questionId));
    }






    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    MultiResponseDto<QuestionDto.Response>
    getQuestions(@RequestParam(required = false, defaultValue = "1") Integer page,
                 @RequestParam(required = false, defaultValue = "15") Integer size) {
        Page<Question> pagedQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pagedQuestions.getContent();
        return MultiResponseDto.of(mapper.entityListToResponseDtoList(questions), pagedQuestions);
    }

    @DeleteMapping("/{question-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void deleteQuestion(@PathVariable(name = "question-id") Long questionId,
                        @RequestHeader(name = "Authorization") String token) {
        questionService.deleteQuestion(questionId, jwtTokenizer.getUserId(token));
    }

    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    MultiResponseDto<QuestionDto.Response>
    searchQuestionsByTitleOrContent(@RequestParam(name = "q") String searchText,
                                    @RequestParam(required = false, defaultValue = "1") Integer page,
                                    @RequestParam(required = false, defaultValue = "15") Integer size) {
        Page<Question> questionPage =
                questionService.findQuestionSearchByTitleOrContent(searchText, searchText, page - 1, size);
        return MultiResponseDto.of(mapper.entityListToResponseDtoList(questionPage.getContent()), questionPage);
    }
}
