#DEV
FROM node:18 as base

WORKDIR /reptile_shop_web
COPY package.json ./
COPY public ./public
COPY src ./src
COPY tsconfig.json ./

RUN npm install

FROM base as production
RUN npm run build
RUN npm install -g serve
CMD ["serve","-s","build"]

FROM base as dev
CMD ["npm", "start"]