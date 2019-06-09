FROM phpearth/php:7.2-apache

RUN apk add --no-cache \
    php7.2-pdo \
    php7.2-pdo_sqlite \
    composer

# see https://gist.github.com/csgruenebe/3f5bdccfd0e0a8ca4391f5ecbd316c26
RUN sed -i -e 's/AllowOverride\s*None/AllowOverride All/ig' /etc/apache2/httpd.conf && \
    sed -i -e 's/\/var\/www\/localhost\/htdocs/\/app\/web/g' /etc/apache2/httpd.conf && \
    sed -i -e 's/#ServerName\s*www.example.com:80/ServerName localhost:80/gi' /etc/apache2/httpd.conf && \
    sed -i -e 's/#LoadModule\s*rewrite_module/LoadModule rewrite_module/gi' /etc/apache2/httpd.conf

COPY ./ /app

RUN composer install --optimize-autoloader --working-dir=/app

ENV YII_DEBUG=0
ENV YII_ENV=prod
