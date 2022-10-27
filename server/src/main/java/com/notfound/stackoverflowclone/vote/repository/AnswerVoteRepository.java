package com.notfound.stackoverflowclone.vote.repository;

import com.notfound.stackoverflowclone.vote.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerVoteRepository extends JpaRepository<Vote, Long> {
}
