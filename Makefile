up:
	@cd docker && docker-compose up --build -d

ps:
	@docker ps

down:
	@cd docker && docker-compose down
