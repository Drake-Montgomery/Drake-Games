package com.drakegames.DrakeGames.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.drakegames.DrakeGames.dto.GameDTO;
import com.drakegames.DrakeGames.dto.ScoreDTO;
import com.drakegames.DrakeGames.entities.Game;
import com.drakegames.DrakeGames.entities.Score;
import com.drakegames.DrakeGames.entities.User;
import com.drakegames.DrakeGames.repositories.GameRepository;
import com.drakegames.DrakeGames.repositories.ScoreRepository;
import com.drakegames.DrakeGames.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private GameRepository gameRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public GameDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Game game = gameRepository.findById(dto.getGameId()).get();
		
		Score score = new Score(); 
		score.setGame(game);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for (Score s : game.getScores()) {
			sum = sum + s.getValue();
		}
		
		
		double avg = sum / game.getScores().size();
		
		
		game.setScore(avg);
		game.setCount(game.getScores().size());
		
		game = gameRepository.save(game);
		
		return new GameDTO(game);
	}
	
	
}
