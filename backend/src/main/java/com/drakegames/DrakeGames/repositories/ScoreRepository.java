package com.drakegames.DrakeGames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.drakegames.DrakeGames.entities.Score;
import com.drakegames.DrakeGames.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
}
