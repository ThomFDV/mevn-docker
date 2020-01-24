FROM nginx:alpine

RUN apk add --update \
	nodejs-npm

WORKDIR /user/local/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
