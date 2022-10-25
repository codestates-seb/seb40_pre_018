package com.notfound.stackoverflowclone.user.repository;

import com.notfound.stackoverflowclone.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
