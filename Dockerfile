FROM node:25.2.0 as base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD npm run dev

