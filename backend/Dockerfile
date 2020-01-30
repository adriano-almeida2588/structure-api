FROM node:12 AS development

RUN mkdir /usr/blog && chown node:node /usr/blog

USER node

WORKDIR /usr/blog

COPY --chown=node:node package.json package-lock.json ./

RUN npm i --quiet

FROM node:12-slim AS production

USER node

WORKDIR /usr/blog

COPY --from=development --chown=root:root /usr/blog/node_modules ./node_modules

COPY . .

COPY entrypoint.sh /usr/bin/

RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT [ "entrypoint.sh" ]

EXPOSE 9000

CMD [ "npm", "start" ]