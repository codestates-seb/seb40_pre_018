package com.notfound.stackoverflowclone.vote.entity;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.audit.AuditingEntity;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.user.entity.User;
import lombok.*;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(uniqueConstraints = {
        @UniqueConstraint(name = "CantVoteAnswerTwice", columnNames = {"user_id", "answer_id"}),
        @UniqueConstraint(name = "CantVoteQuestionTwice", columnNames = {"user_id", "question_id"})
})
public class Vote extends AuditingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User voter;

    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @Range(min = -1, max = 1)
    private int amount;
}
