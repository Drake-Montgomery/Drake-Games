package com.drakegames.DrakeGames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drakegames.DrakeGames.dto.GameDTO;
import com.drakegames.DrakeGames.dto.ScoreDTO;
import com.drakegames.DrakeGames.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
	
	//Metodo GET
	@PutMapping
	public GameDTO saveScore(@RequestBody ScoreDTO dto) {
		GameDTO gameDTO = service.saveScore(dto);
		return gameDTO;
	}
	
	
}
