#DEV
FROM node:18

WORKDIR /reptile_shop_web
COPY package.json ./
COPY public ./
COPY src ./src
COPY tsconfig.json ./

RUN npm install

CMD ["npm", "start"]