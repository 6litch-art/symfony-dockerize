FROM nginx:alpine

WORKDIR /var/www

CMD ["nginx"]
RUN chown xfs:xfs -R /var/www
RUN chmod 755 -R /var/www

EXPOSE 80
