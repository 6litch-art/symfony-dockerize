.PHONY: assets

PROJECT_NAME = $(shell grep '^PROJECT_NAME[ ]*=' .env | cut -d '=' -f2 | tr -d '[:space:]')

ifeq ($(PROJECT_NAME),)
$(error PROJECT_NAME is not defined in .env)
endif

DOCKER_COMPOSE = docker-compose
NODE = docker exec -ti $(shell docker container ls -f "name=$(PROJECT_NAME)-node$$" -q)
PHP  = docker exec -ti $(shell docker container ls -f "name=$(PROJECT_NAME)-php$$" -q)

COLOR_RESET	  = \033[0m
COLOR_ERROR	  = \033[31m
COLOR_INFO	  = \033[32m
COLOR_COMMENT	  = \033[33m
COLOR_TITLE_BLOCK = \033[0;44m\033[37m

help:
	@printf "${COLOR_TITLE_BLOCK}Makefile for project \"$(PROJECT_NAME)\"${COLOR_RESET}\n"
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

## Build containers
image:
	@$(DOCKER_COMPOSE) build --pull --no-cache

## Serve docker environment
DEBUG ?= false 
ifeq ($(shell uname), Darwin)
    SED_FLAGS = -i ''
else
    SED_FLAGS = -i
endif

up:
	@sed $(SED_FLAGS) "/APP_ENV=/d" .env
	@sed $(SED_FLAGS) "/APP_DEBUG=/d" .env
ifeq ($(strip $(DEBUG)),true)
	@echo "APP_ENV=dev" >> .env
	@echo "APP_DEBUG=1" >> .env
	@$(DOCKER_COMPOSE) -f docker-compose.yml -f docker-compose.override.yml up -d
	@echo "[+] Application source is loaded from local directory"
else
	@echo "APP_ENV=prod" >> .env
	@echo "APP_DEBUG=0" >> .env
	@$(DOCKER_COMPOSE) -f docker-compose.yml up -d
	@echo "[+] Application source is loaded from docker volume"
endif

## Stop containers
down:
	@$(DOCKER_COMPOSE) down

restart: down up

## Enter shell for any service
SERVICE ?=
shell:
ifeq ($(SERVICE),)
	$(error SERVICE is not set. Please specify a service like: make shell SERVICE=\*)
endif
	@$(DOCKER_COMPOSE) exec $(SERVICE) sh

## Composer, database & assets
composer:
ifeq ($(strip $(DEBUG)),true)
	@$(PHP) composer update
else
	@$(PHP) composer install --prefer-dist --no-dev --no-progress --no-scripts --no-interaction
endif
database:
	@$(PHP) php bin/console doctrine:schema:update --dump-sql --force -vvv
migrate:
	# @$(PHP) 
assets:
	@$(NODE) yarn install
secrets:
	@$(PHP) php bin/console secrets:list --reveal

clear:
	@$(PHP) php bin/console cache:clear

## Kill all containers
kill:
	@$(DOCKER_COMPOSE) kill $(CONTAINER) || true
	@$(PHP)	rm -rf var/cache

## QA
cs-fixer:
	docker run --init -it --rm -v $(PWD):/project -w /project jakzal/phpqa php-cs-fixer fix ./src --rules=@Symfony

cs-fixer-dry:
	docker run --init -it --rm -v $(PWD):/project -w /project jakzal/phpqa php-cs-fixer fix ./src --rules=@Symfony --dry-run

phpcpd:
	docker run --init -it --rm -v $(PWD):/project -w /project jakzal/phpqa phpcpd ./src

phpstan:
	docker run --init -it --rm -v $(PWD):/project -w /project jakzal/phpqa phpstan analyse ./src --level=5
