FROM nginx

LABEL maintainer "yang"

COPY ./build/ /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3001