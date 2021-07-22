# Bridge Back

## How to launch it

Run `npm run up` to start the application (postgres and nodejs microservice).
It will be exposed in port 3001 [localhost:3001](http://localhost:3001)

## TODO

- Add unit tests using jest
- Create an script to deploy the app in heroku
- Create API schema documentation with some tool like swagger
- Use some request schema validation (like @hapi/Joi) and add a middleware for checking this and throwing a 400 Bad request
- Add a CI configuration file (Travis for example) to run test, docker build and deploy stages on each push to master
