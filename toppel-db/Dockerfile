FROM centos:7

EXPOSE 27017

RUN yum config-manager --add-repo=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
RUN yum install mongodb-org
RUN systemctl start mongod

ENTRYPOINT mongod
