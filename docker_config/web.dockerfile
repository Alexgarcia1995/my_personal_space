FROM node:18-bullseye-slim

ENV YARN_CACHE_FOLDER=/cache/yarn

WORKDIR /app

# install dependencies
COPY web/package.json ./
RUN --mount=type=cache,target=/cache/yarn \
  yarn install

# copy app source
COPY web/ ./

ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=8080
CMD ["yarn", "dev"]
