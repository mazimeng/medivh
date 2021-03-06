FROM node:8.9.4-alpine
COPY ./package.json ./package-lock.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install --production
COPY . /usr/src/app
CMD npm start

