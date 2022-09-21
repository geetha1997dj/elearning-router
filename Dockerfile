FROM node:12.13-alpine
RUN mkdir -p /var/www/router
WORKDIR /var/www/router
# ADD . /var/www/router
COPY package*.json ./
RUN npm install
RUN npm ci
COPY . .
CMD npm run start
