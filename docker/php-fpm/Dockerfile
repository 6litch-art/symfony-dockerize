FROM php:7.4-fpm-alpine

COPY wait-for-it.sh /usr/bin/wait-for-it

RUN chmod +x /usr/bin/wait-for-it

RUN apk --update --no-cache add git

RUN docker-php-ext-install pdo_mysql

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN chown -R www-data:www-data /var/www
WORKDIR /var/www

CMD composer install ; wait-for-it database:3306 ; php-fpm
#-- bin/console doctrine:migrations:migrate;  php-fpm 

EXPOSE 9000
