up:
	@cd docker && docker-compose up -d --build
	@bin/dock chmod 755 -R /var/www/var
	@bin/dock chown www-data:www-data -R /var/www/var

ps:
	@docker ps

down:
	@cd docker && docker-compose down
