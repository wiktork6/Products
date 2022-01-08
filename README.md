## Description
A simple server side application written in Nest.js that manages routes for http requests - ADD/GET/UPDATE and DELETE products from MongoDB.

## Installation

Go to the root folder of the project and run

```bash
$ npm install
```

## Setup

To setup the application create an .env file with similar structure to the .env.example file that exists in the repository.
Add a port number that you wish an application to be running on eg. 3000.
In MONGODB_ADRESS field add your url connection adress to your mongodb database.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Routes
https://documenter.getpostman.com/view/15934832/UVXerJ88
