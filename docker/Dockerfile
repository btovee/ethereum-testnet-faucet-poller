FROM node:latest

RUN mkdir -p /usr/src/app
COPY ./src /usr/src/app

WORKDIR /usr/src/app
RUN npm install

CMD ["node","/usr/src/app/index.js"]
EXPOSE 443
