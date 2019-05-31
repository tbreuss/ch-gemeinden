FROM phpearth/php:7.2-apache

RUN apk add --no-cache php7.2-pdo php7.2-pdo_mysql

# see https://gist.github.com/csgruenebe/3f5bdccfd0e0a8ca4391f5ecbd316c26
RUN sed -i -e 's/AllowOverride\s*None/AllowOverride All/ig' /etc/apache2/httpd.conf && \
    sed -i -e 's/#LoadModule\s*rewrite_module/LoadModule rewrite_module/gi' /etc/apache2/httpd.conf
