FROM centos:8

WORKDIR /app/

RUN dnf install npm -y

COPY toppel/ /app/

RUN npm install

EXPOSE 3000

ENTRYPOINT npm start
