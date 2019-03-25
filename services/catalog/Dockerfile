#
# ---- Base Node ----
FROM node:8-alpine AS base

RUN apk add --no-cache tini

WORKDIR /server

COPY package.json .
COPY yarn.lock .

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN yarn install --production 
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN yarn

# ---- Build ----
FROM dependencies AS build
COPY . .
RUN yarn tsc

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=build /server/prod_node_modules ./node_modules
# copy app sources
COPY --from=build /server/dist .

CMD ["tini", "node", "main.js"]

