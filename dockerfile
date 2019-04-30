FROM node:8
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 443
EXPOSE 80
CMD [ "npm", "start" ]