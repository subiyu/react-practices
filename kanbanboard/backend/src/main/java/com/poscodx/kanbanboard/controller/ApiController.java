package com.poscodx.kanbanboard.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.CardRepository;
import com.poscodx.kanbanboard.repository.TaskRepository;
import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api")
public class ApiController {
	private CardRepository cardRepository;
	private TaskRepository taskRepository;
	
	public ApiController(CardRepository cardRepository, TaskRepository taskRepository) {
		this.cardRepository = cardRepository;
		this.taskRepository = taskRepository;
	}
	
	@GetMapping("")
	public ResponseEntity<JsonResult> index() {
		log.info("Request[GET /api]: ");
		
		List<CardVo> cardList = cardRepository.findAll();
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardList));
	}
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult> createTask(@RequestBody TaskVo vo) {

		log.info("Request[POST /api/task]: " + vo);
	    taskRepository.insert(vo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@GetMapping("/task/{no}")
	public ResponseEntity<JsonResult> getTaskList(
			@PathVariable("no") Long cardNo) {
		
		List<TaskVo> taskList = taskRepository.findAllByCardNo(cardNo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskList));
	}
	
	@PutMapping("/task")
	public ResponseEntity<JsonResult> updateDone(@RequestBody TaskVo vo) {
		log.info("Request[PUT /api/task]: " + vo);
		
		taskRepository.update(vo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@DeleteMapping("/task/{no}")
	public ResponseEntity<JsonResult> deleteTask(@PathVariable("no") Long no) {
		log.info("Request[DELETE /api/task]: " + no);
		
		taskRepository.deleteByNo(no);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
}