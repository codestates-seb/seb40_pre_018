package com.notfound.stackoverflowclone.vote.repository;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.vote.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    List<Vote> findAllByVoterAndAnswer(User user, Answer answer);
    List<Vote> findAllByAnswer(Answer answer);
}
