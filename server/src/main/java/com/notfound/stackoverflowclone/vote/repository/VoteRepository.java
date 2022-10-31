package com.notfound.stackoverflowclone.vote.repository;

import com.notfound.stackoverflowclone.vote.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteRepository extends JpaRepository<Vote, Long> {
}
