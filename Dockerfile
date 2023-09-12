FROM node:12.18.3-alpine3.12
WORKDIR /app
COPY package.json ./
RUN npm install
COPY public ./public
COPY src ./src
CMD [ "npm","start" ]
EXPOSE 3000
