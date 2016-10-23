FROM ubuntu

RUN apt-get update

RUN apt-get install -y nodejs npm

RUN mkdir  /usr/src/app_folder

WORKDIR /usr/src/app_folder

COPY package.json /usr/src/app_folder

RUN /usr/bin/npm install --silent --progress=false

COPY . /usr/src/app_folder

EXPOSE 9010:9010

CMD [ "/usr/bin/nodejs", "server.js" ]
