#
# ---- Base Node ----
FROM node:8-alpine AS base

RUN yarn global add pm2

WORKDIR /server

COPY package.json .
COPY yarn.lock .
COPY ecosystem.config.js .

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN yarn install --production 
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN yarn

#
# ---- Test ----
# run linters, setup and tests
FROM dependencies AS testAndBuild
COPY . .
RUN yarn lint && yarn test
RUN yarn tsc

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=testAndBuild /server/prod_node_modules ./node_modules
# copy app sources
COPY --from=testAndBuild /server/dist .

# expose port and define CMD
EXPOSE 3000

CMD ["pm2-docker", "start", "ecosystem.config.js"]

