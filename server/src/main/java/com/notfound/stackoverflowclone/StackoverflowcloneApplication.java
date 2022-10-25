package com.notfound.stackoverflowclone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class StackoverflowcloneApplication {

	public static void main(String[] args) {
		SpringApplication.run(StackoverflowcloneApplication.class, args);
	}

}
