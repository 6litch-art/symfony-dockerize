.PHONY: assets

ifneq (,$(wildcard .env))
    include .env
endif

DOCKER_COMPOSE = docker-compose
DOCKER_DATABASE = docker exec -ti $(shell docker container ls -f "name=$(PROJECT_NAME)-database$$" -q)
DOCKER_ASSETS  = docker exec -ti $(shell docker container ls -f "name=$(PROJECT_NAME)-assets$$" -q)
DOCKER_PHP     = docker exec -ti $(shell docker container ls -f "name=$(PROJECT_NAME)-php$$" -q)

COLOR_RESET	  = \033[0m
COLOR_ERROR	  = \033[31m
COLOR_INFO	  = \033[32m
COLOR_DEBUG	  = \033[36m
COLOR_COMMENT	  = \033[33m
COLOR_TITLE_BLOCK = \033[0;44m\033[37m

## Show help message with available targets
help:
	@printf "${COLOR_TITLE_BLOCK}Project Application \"$(PROJECT_NAME)\"${COLOR_RESET}\n"
	@printf "\n"
	@printf "${COLOR_COMMENT}Usage:${COLOR_RESET}\n"
	@printf " make [target]\n\n"
	@printf "${COLOR_COMMENT}Available targets:${COLOR_RESET}\n"
	@awk '/^[a-zA-Z\-\_0-9\@]+:/ { \
		helpLine = match(lastLine, /^## (.*)/); \
		helpCommand = substr($$1, 0, index($$1, ":")); \
		helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
		printf " ${COLOR_INFO}%-16s${COLOR_RESET} %s\n", helpCommand, helpMessage; \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)

## Build Docker images for the project
image: env
	@$(DOCKER_COMPOSE) build --pull --no-cache

## Set up environment variables in .env file
env:
	@sed $(SED_FLAGS) "/APP_ENV=/d" .env
	@echo "APP_ENV=$(APP_ENV)" >> .env
	@sed $(SED_FLAGS) "/APP_DEBUG=/d" .env
	@echo "APP_DEBUG=$(APP_DEBUG)" >> .env

## Start Docker containers
up:
ifneq ($(filter $(APP_DEBUG),1 true),)
	@$(DOCKER_COMPOSE) -f docker-compose.yml -f docker-compose.override.yml up -d
	@echo "[+] Application source is loaded in sync with $(COLOR_DEBUG)local directory$(COLOR_RESET)"
else
	@$(DOCKER_COMPOSE) -f docker-compose.yml up -d
	@echo "[+] Application source is loaded from $(COLOR_INFO)docker volume$(COLOR_RESET)"
endif

## Stop Docker containers
down:
	@$(DOCKER_COMPOSE) down

## Restart Docker containers
restart: down up

## Open a shell in a specific Docker service
shell:
ifeq ($(SERVICE),)
	$(error SERVICE is not set. Please specify a service like: make shell SERVICE=\*)
endif
	@$(DOCKER_COMPOSE) exec $(SERVICE) sh

## Run Composer to manage PHP dependencies
composer: env
ifeq ($(strip $(APP_DEBUG)),true)
	@$(DOCKER_PHP) composer install
	@$(DOCKER_PHP) composer update
	@echo "[+] Application composer built development environment."
else
	@$(DOCKER_PHP) composer install --prefer-dist --no-dev --no-progress --no-scripts --no-interaction
	@$(DOCKER_PHP) composer update
	@echo "[+] Application composer built production environment."
endif

## Show the MariaDB version
database-version:
	$(DOCKER_DATABASE) mariadb -h $(MYSQL_HOST) -u $(MYSQL_USER) -p$(MYSQL_PASSWORD) $(MYSQL_DATABASE) -e "SELECT VERSION();"

## Open the MariaDB console
database:
	$(DOCKER_DATABASE) mariadb -h $(MYSQL_HOST) -u root -p$(MYSQL_ROOT_PASSWORD) $(MYSQL_DATABASE)

## Update the database schema
doctrine-upgrade:
	@$(DOCKER_PHP) php bin/console doctrine:schema:update --dump-sql --force -vvv

## Run database migrations
doctrine-migration:
	@$(DOCKER_PHP) php bin/console doctrine:migrations:migrate --no-interaction -vvv

## Install frontend assets with Yarn
assets:
	@$(DOCKER_ASSETS) yarn install

## List all application secrets
secrets:
	@$(DOCKER_PHP) php bin/console secrets:list --reveal

## Clear the application cache
clear:
	@$(DOCKER_PHP) php bin/console cache:clear

## Remove cache and clear the application
kill:
	@$(DOCKER_PHP)	rm -rf var/cache
	@$(MAKE) clear

## Run PHP-CS-Fixer to fix coding standards
cs-fixer:
	docker run --init -it --rm -v $(PWD):/srv/local -w /srv/local jakzal/phpqa php-cs-fixer fix ./src --rules=@Symfony

## Run PHP-CS-Fixer in dry-run mode
cs-fixer-dry:
	docker run --init -it --rm -v $(PWD):/srv/local -w /srv/local jakzal/phpqa php-cs-fixer fix ./src --rules=@Symfony --dry-run

## Detect copy-paste code
phpcpd:
	docker run --init -it --rm -v $(PWD):/srv/local -w /srv/local jakzal/phpqa phpcpd ./src

## Run PHPStan static analysis
phpstan:
	docker run --init -it --rm -v $(PWD):/srv/local -w /srv/local jakzal/phpqa phpstan analyse ./src --level=5
