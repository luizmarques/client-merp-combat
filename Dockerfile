FROM node:22.11.0-slim

USER node

WORKDIR /home/node/client-merp-combat

CMD [ "tail", "-f", "/dev/null" ]
