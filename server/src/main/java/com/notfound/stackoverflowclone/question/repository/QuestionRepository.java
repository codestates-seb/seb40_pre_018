package com.notfound.stackoverflowclone.question.repository;

import com.notfound.stackoverflowclone.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
