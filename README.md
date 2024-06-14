# Catalog API Service

## Local Machine Setup

1. Clone the repo on your machine ```git clone git@github.com:tony-tripulca/ec-catalog-service.git```
2. Go to the directory ```cd ec-catalog-service```
3. Use nodemon to watch for dev changes ```npm install -g nodemon```
4. Install dependencies ```npm install```
5. Start the service ```npm start```

## PM2 Setup

NOTE: Make sure that the local machine setup is working

1. Got to the directory ```cd ec-catalog-service```
2. Install PM2 ```npm install -g pm2```
3. Start the pm2 eco system ```pm2 start ecosystem.config.js```

## PM2 Services

[Learn more on PM2](https://pm2.keymetrics.io/docs/usage/quick-start)

* Viewing logs ```pm2 logs```
* Service monitors ```pm2 monit```
* List of runing services ```pm2 list```