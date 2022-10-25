package com.notfound.stackoverflowclone.user.entity;

import com.notfound.stackoverflowclone.answer.entity.Answer;
import com.notfound.stackoverflowclone.audit.AuditingEntity;
import com.notfound.stackoverflowclone.question.entity.Question;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User extends AuditingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String email;

    private String password;

    private String nickname;

    @Enumerated(EnumType.STRING)
    private UserStatus userStatus;

    @OneToMany(mappedBy = "author")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "author")
    private List<Answer> answers = new ArrayList<>();


}