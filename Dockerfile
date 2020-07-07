FROM node:12

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . /src/app

EXPOSE 80

CMD ["npm", "start"]

