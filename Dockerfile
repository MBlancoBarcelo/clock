FROM node:25.2.0 as base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM httpd:2.4-alpine
COPY --from=base /app/dist/ /usr/local/apache2/htdocs/
EXPOSE 80
CMD ["httpd-foreground"]


