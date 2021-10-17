FROM node:12-alpine
EXPOSE 3000

RUN mkdir -p /app/build
WORKDIR /app

COPY package.json /app/package.json
RUN npm install --only=prod

COPY build/ /app/build/
COPY start.js /app/start.js

CMD [ "npm", "start" ]
