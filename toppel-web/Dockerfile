FROM centos:8

RUN dnf install npm -y

COPY toppel/ /app/

EXPOSE 3000

ENTRYPOINT cd /app/ && npm start

