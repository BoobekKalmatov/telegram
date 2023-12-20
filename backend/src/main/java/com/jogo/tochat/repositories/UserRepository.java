package com.jogo.tochat.repositories;

import com.jogo.tochat.entities.userEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<userEntity, Integer> {
    Optional<userEntity> findUserByEmail(String email);
//    User findByUserId(int userId);
}
