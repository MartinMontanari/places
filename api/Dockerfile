FROM node:14-buster

RUN apt install python3

COPY ["package.json", "/usr/src/service/server/"]

WORKDIR /usr/src/service/server

RUN npm install

COPY [".", "/usr/src/service/server/"]

CMD ["npm", "start"]