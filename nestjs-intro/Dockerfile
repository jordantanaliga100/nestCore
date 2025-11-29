# Base 🏘️
FROM node:20-alpine AS base 
WORKDIR /app 
COPY package*.json ./ 
# create a non-root user 
RUN addgroup -g 1001 -S nestjs && adduser -u 1001 -S nestjs -G nestjs 

# Development 🛠️ 
FROM base AS development 
USER root 
RUN npm ci && npm cache clean --force  
COPY . . 
EXPOSE 3000
CMD ["npm", "run", "start:dev"]   

# =====================
# PRODUCTION 🔥
# =====================  
FROM base AS builder 
USER root 
RUN npm ci 
COPY . . 
RUN npm run build

FROM node:20-alpine AS production 
USER root 
WORKDIR /app 
RUN addgroup -g 1001 -S nestjs \
    && adduser -u 1001 -S nestjs -G nestjs
COPY package*.json ./ 
RUN npm ci --only=production && npm cache clean --force 
COPY --from=builder /app/dist ./dist 
RUN chown -R nestjs:nestjs /app
USER nestjs 
EXPOSE 3000 
ENV NODE_ENV=production
CMD [ "node", "dist/main.js" ]


