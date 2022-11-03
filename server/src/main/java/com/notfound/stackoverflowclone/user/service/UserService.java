package com.notfound.stackoverflowclone.user.service;


import com.notfound.stackoverflowclone.auth.util.CustomAuthorityUtils;
import com.notfound.stackoverflowclone.exception.BusinessLogicException;
import com.notfound.stackoverflowclone.exception.ExceptionCode;
import com.notfound.stackoverflowclone.user.entity.User;
import com.notfound.stackoverflowclone.user.entity.UserStatus;
import com.notfound.stackoverflowclone.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Transactional
@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public User saveUser(User user){
        verifyExistEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        return userRepository.save(user);
    }

    private void verifyExistEmail(String email){
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
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