FROM node:18-alpine AS dependencies
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM node:18-alpine
WORKDIR /usr/src/app
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY . .

CMD [ "npm", "run", "start" ]