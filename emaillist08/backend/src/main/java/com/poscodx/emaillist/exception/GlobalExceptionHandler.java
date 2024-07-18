package com.poscodx.emaillist.exception;

import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.StringWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.poscodx.emaillist.dto.JsonResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {
			
	@ExceptionHandler(Exception.class)
	public void handler(
			HttpServletRequest request, 
			HttpServletResponse response,
			Exception e
		) throws Exception {
			// logging
			StringWriter errors = new StringWriter();
			e.printStackTrace(new PrintWriter(errors));
			System.out.println(errors.toString());  //화면
			log.error(errors.toString()); 		//파일+화면
			
			// 2. 요청구분
			String accept = request.getHeader("accept");
			
			// 500 for json request
			if(accept.matches(".*application/json.*")) {
				// 3. json 응답
				JsonResult jsonResult = JsonResult.fail(errors.toString());
				String jsonString = new ObjectMapper().writeValueAsString(jsonResult);
				
				response.setStatus(HttpServletResponse.SC_OK);
				response.setContentType("application/json; charset=utf-8");
				OutputStream os = response.getOutputStream();
				os.write(jsonString.getBytes("utf-8"));
				os.close();
				
				return;
			} 
			
			// 404 for html request
			if(e instanceof NoHandlerFoundException) {
				/*
				 * request .getRequestDispatcher("/WEB-INF/views/errors/404.jsp")
				 * .forward(request, response);
				 */
				request
					.getRequestDispatcher("/error/404")
					.forward(request, response);
				return;
			} 
			
			// 500 for html request
			request.setAttribute("error", errors.toString());
			/*
			 * request .getRequestDispatcher("/WEB-INF/views/errors/exception.jsp")
			 * .forward(request, response);
			 */
			request
				.getRequestDispatcher("/error/500")
				.forward(request, response);
	}
}
