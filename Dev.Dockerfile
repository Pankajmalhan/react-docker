FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

EXPOSE 3000
EXPOSE 35729

COPY ./ ./
CMD [ "npm","run","start" ] 




# FROM node:latest

# LABEL author="Pankaj Kumar CHoudhary"
# ENV NODE_ENV=development 
# ENV PORT=3000

# COPY      . /var/www
# WORKDIR   /var/www

# RUN       npm install

# EXPOSE $PORT

# ENTRYPOINT ["npm", "start"]