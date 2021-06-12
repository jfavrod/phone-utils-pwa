FROM node:12-alpine

RUN mkdir -p /app/build
WORKDIR /app

COPY build/ /app/build/
COPY package.json /app/package.json

RUN npm install --only=prod
CMD [ "npm", "start" ]
