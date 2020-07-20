FROM node:alpine AS builder

WORKDIR /app

COPY . .
ARG currentEnv=uat
# RUN echo ${currentEnv}-build
# RUN npm install && \
#     npm run build-${currentEnv}

FROM nginx:alpine

COPY --from=builder /app/dist/web-template/ /usr/share/nginx/html/
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf