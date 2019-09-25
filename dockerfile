FROM node
WORKDIR /app
ADD ./API/ /app
RUN npm install

ENV NODE_ENV "development"

CMD ["npm","start"]
