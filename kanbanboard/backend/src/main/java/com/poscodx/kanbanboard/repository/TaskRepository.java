package com.poscodx.kanbanboard.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class TaskRepository {
	private SqlSession sqlSession;

	public TaskRepository(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public List<TaskVo> findAllByCardNo(Long cardNo) {
		return sqlSession.selectList("task.findAllByCardNo", cardNo);
	}
	
	public int insert(TaskVo vo) {
		return sqlSession.insert("task.insert", vo);
	}
	
	public int update(TaskVo vo) {
		if(vo.getDone().equals("Y")) {
			vo.setDone("N");
		} else {
			vo.setDone("Y");
		}
		
		return sqlSession.update("task.update", Map.of("no", vo.getNo(), "done", vo.getNo()));
	}
	
	public int deleteByNo(Long no) {
		return sqlSession.delete("task.deleteByNo", no);
	}
}
