FROM centos:8

RUN dnf install npm

COPY toppel/*
COPY package.json

ENTRYPOINT npm start
