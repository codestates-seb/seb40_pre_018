package com.notfound.stackoverflowclone.question.repository;

import com.notfound.stackoverflowclone.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findAllByTitleLikeOrContentLike(String title, String content);
}
