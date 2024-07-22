package com.poscodx.kanbanboard.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class TaskVo {
	private Long no;
	private String name;
	private String done;
	private Long cardNo;
	
	public TaskVo() {}
	
	public TaskVo(String name, Long cardNo) {
		this.name = name;
		this.cardNo = cardNo;
	}
}
