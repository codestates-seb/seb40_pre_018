package com.notfound.stackoverflowclone.user.service;

import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user){
        verifyExistEmail(user.getEmail());
        return userRepository.save(user);
    }
    private void verifyExistEmail(String email){
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent())
            throw new RuntimeException(); //일단런타임오류로 작성
    }
}
