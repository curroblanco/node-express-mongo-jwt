# NodeJS Express and MongoDB Rest-API Example

## Requirements

Only having **Docker** and **Docker-Toolbox** already installed on your SO

* Manual of installation -> ```https://docs.docker.com/```

## Instructions

After installing Docker on you Computer just execute the following commands on the project's main directory

* ```docker-compose build```

* ```docker-compose up``` or ```docker-compose up -d```

The usage of the Movies and Actor's APIs are restricted to logged in users. First you have to create an *user* inside the database and authenticate it throw the **/users/login** endpoint to generate a valid JWT.

* Example of User generation

```
curl -X POST \
  http://localhost:8090/users \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"name": "Nombre",
	"nick": "Nickname",
	"email": "Email@email.com",
	"password": "password"
}'
```

* Example of User login 

```
curl -X POST \
  http://localhost:8090/users/login \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"nick": "Nickname",
	"password": "password"
}'
```

* Example of Authorization Header including JWT

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOiJOaWNrbmFtZSIsInJvbGUiOiJVc2VyIn0sImlhdCI6MTU3MTA0OTY4OCwiZXhwIjoxODg2NDA5Njg4fQ.ZXSg1OTU-r4WZDV7UpLBDObyXVPU5VYbA5CdTWrvKKM
```

## Examples

You could locate a example collection for **Postman** application inside the **examples** folder.