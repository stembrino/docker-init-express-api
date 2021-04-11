FROM node:14.16.1
WORKDIR /easy-http
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "/easy-http/app/app.mjs"]