FROM centos:8

WORKDIR /app/

RUN dnf install npm -y

EXPOSE 3000

ENTRYPOINT npm install && npm start
