package com.notfound.stackoverflowclone.vote.repository;

import com.notfound.stackoverflowclone.vote.entity.QuestionVote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
}
