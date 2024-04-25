# Dockerfile
FROM node:latest

WORKDIR /usr/src/app
COPY . .
RUN npm install -g nodemon
RUN npm ci

EXPOSE 3000
RUN echo "To ja!"
CMD [ "nodemon", "app.js" ]