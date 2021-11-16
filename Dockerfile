# base Image
FROM node:14.17.3-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules .bin:$PATH

COPY . /app
RUN yarn
RUN yarn build
