FROM node:22.11.0-slim
USER node
WORKDIR /home/node/client
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD [ "tail", "-f", "/dev/null" ]