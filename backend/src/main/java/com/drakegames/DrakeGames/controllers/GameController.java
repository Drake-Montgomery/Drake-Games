package com.drakegames.DrakeGames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drakegames.DrakeGames.dto.GameDTO;
import com.drakegames.DrakeGames.services.GameService;

@RestController
@RequestMapping(value = "/games")
public class GameController {
	
	@Autowired
	private GameService service;
	
	//Metodo GET
	@GetMapping
	public Page<GameDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	//Metodo GET
	@GetMapping(value = "/{id}")
	public GameDTO findById(@PathVariable Long id){
		return service.findById(id);
	}
	
}
