package com.notfound.stackoverflowclone.answer.entity;

import com.notfound.stackoverflowclone.audit.AuditingEntity;
import com.notfound.stackoverflowclone.question.entity.Question;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.vote.entity.Vote;
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

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Builder.Default
    @OneToMany(mappedBy = "answer", cascade = {CascadeType.REMOVE})
    private List<Vote> votes = new ArrayList<>();

    public int getVoteCount(){
        return votes.stream().mapToInt(Vote::getAmount).sum();
    }
}
