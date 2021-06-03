FROM node:14-alpine

WORKDIR /app

COPY package.json *.lock ./

RUN yarn install

COPY tsconfig.json tsconfig.build.json nest-cli.json ./
COPY src/ ./src/

RUN npm run build

# RUN yarn migration:run

EXPOSE 8080
# CMD [ "node", "dist/main" ]