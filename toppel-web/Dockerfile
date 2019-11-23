FROM centos:8

RUN dnf install npm -y

COPY toppel/ /app/

ENTRYPOINT cd /app/ && npm start

