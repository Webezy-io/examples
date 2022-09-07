FROM node:16.3-alpine3.12
WORKDIR /
ADD . /
RUN pwd
RUN apk add --no-cache tini && npm i --target_arch=x64 --target_platform=linux
CMD ["tini", "--", "./node_modules/.bin/ts-node", "/server.ts"]