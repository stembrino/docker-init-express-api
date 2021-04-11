FROM node:14.16.1
WORKDIR /easy-http
COPY package.json /easy-http
RUN npm install
COPY . /easy-http
CMD ["node", "/easy-http/app/app.mjs"]