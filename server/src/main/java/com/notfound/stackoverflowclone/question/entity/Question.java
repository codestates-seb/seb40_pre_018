package com.notfound.stackoverflowclone.question.entity;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.audit.AuditingEntity;
import com.notfound.stackoverflowclone.user.entity.User;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Question extends AuditingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private long clicks;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();
}
