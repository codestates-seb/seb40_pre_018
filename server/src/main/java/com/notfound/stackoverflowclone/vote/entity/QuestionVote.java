package com.notfound.stackoverflowclone.vote.entity;

import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.audit.AuditingEntity;
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
        @UniqueConstraint(name = "CantVoteTwice", columnNames = {"user_id", "question_id"})
})
public class QuestionVote extends AuditingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionVoteId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @Range(min = -1, max = 1)
    private int amount;
}
