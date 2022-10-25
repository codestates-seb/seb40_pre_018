package com.notfound.stackoverflowclone.answer.repository;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
