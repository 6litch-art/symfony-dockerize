FROM php:7.4-fpm-alpine

COPY wait-for-it.sh /usr/bin/wait-for-it
RUN chmod +x /usr/bin/wait-for-it
RUN apk --update --no-cache add git shadow
RUN docker-php-ext-install pdo_mysql

COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
CMD composer install ; wait-for-it database:3306 ; php-fpm
RUN chown www-data:www-data -R /var/www
RUN chmod 755 -R /var/www

EXPOSE 9000
