FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
