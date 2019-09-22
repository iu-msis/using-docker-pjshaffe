
  aswe344exc vbnm,./FROM php:7.3.8-apache

LABEL maintainer="Patrick Shaffer"

COPY ./app/srv/app

COPY app/public/docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
