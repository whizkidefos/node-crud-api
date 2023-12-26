# Node CRUD Rest API

JavaScript CRUD Rest API using Nodejs, Express, Sequelize, Postgres, Docker and Docker Compose

### To run the project on your local
#### Run the following commands in  your terminal:

- docker compose up -d node_db
- docker compose logs

if we see "database system is ready to accept connections" we are good to go!
You can test the db and endpoints with TablePlus and Postman.

#### Now, let's build our Docker iamge:

- docker compose build

#### Finally, let's start the service:
- docker compose up node_app