package com.drakegames.DrakeGames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.drakegames.DrakeGames.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}
