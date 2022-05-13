package com.drakegames.DrakeGames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.drakegames.DrakeGames.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {
	
}
