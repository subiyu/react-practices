package com.poscodx.kanbanboard.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.CardVo;

@Repository
public class CardRepository {
	private SqlSession sqlSession;

	public CardRepository(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public List<CardVo> findAll() {
		return sqlSession.selectList("card.findAll");
	}
}
