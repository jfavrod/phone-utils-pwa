FROM node:12-alpine

RUN mkdir -p /app/build
WORKDIR /app

COPY build/ /app/build/
COPY package.json /app/package.json
COPY start.js /app/start.js

RUN npm install --only=prod
CMD [ "npm", "start" ]
