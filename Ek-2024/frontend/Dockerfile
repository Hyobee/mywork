FROM node:20.11.0-alpine AS local

WORKDIR /app

RUN npm install -g pm2

# Set volume
VOLUME ["/app"]

EXPOSE 3000

CMD ["npm", "run", "dev"]