package com.notfound.stackoverflowclone.answer.entity;

import com.notfound.stackoverflowclone.audit.AuditingEntity;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.user.entity.User;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Answer extends AuditingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @Column(columnDefinition = "TEXT")
    private String content;
}
