FROM node:8

RUN mkdir /node-basic
ADD . /node-basic
WORKDIR /node-basic
RUN npm install
CMD cd /node-basic && npm start
