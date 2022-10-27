package com.notfound.stackoverflowclone.user.service;


import com.notfound.stackoverflowclone.exception.BusinessLogicException;
import com.notfound.stackoverflowclone.exception.ExceptionCode;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.entity.UserStatus;
import com.notfound.stackoverflowclone.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Transactional
@Service
public class UserService {
    private final UserRepository userRepository;

    public User createUser(User user){
        verifyExistEmail(user.getEmail());
        return userRepository.save(user);
    }
    private void verifyExistEmail(String email){
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent())
            throw new RuntimeException(); //일단런타임오류로 작성
    }
    @Transactional(readOnly = true)
    public User findVerifiedUser(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        if (findUser.getUserStatus() == UserStatus.RESIGNED) {
            throw new BusinessLogicException(ExceptionCode.USER_RESIGNED);
        }
        return findUser;
    }
}
