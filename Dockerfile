FROM php:8.1.1-apache

COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite

RUN apt-get -y update \
&& apt-get install -y libicu-dev \
&& docker-php-ext-install intl mysqli pdo_mysql

RUN apt-get update
RUN apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev
RUN pecl install mongodb && docker-php-ext-enable mongodb
RUN echo "extension=mongodb.so" >> /usr/local/etc/php/conf.d/mongodb.ini

CMD ["apache2-foreground"]