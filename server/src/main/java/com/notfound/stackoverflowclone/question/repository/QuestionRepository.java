package com.notfound.stackoverflowclone.question.repository;

import com.notfound.stackoverflowclone.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Page<Question> findAllByTitleContainsOrContentContains(String title, String content, Pageable pageable);

    @Modifying(clearAutomatically = true)
    @Query("update Question q set q.views = q.views + 1 where q = :q")
    void updateView(@Param("q") Question question);
}
