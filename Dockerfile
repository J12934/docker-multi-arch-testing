FROM node:12-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci --production
COPY main.js /app/main.js
EXPOSE 3000
CMD ["node", "/app/main.js"]