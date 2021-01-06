docker ps

docker run --name postgres -e POSTGRES_USER=gasorey -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USER=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker run --name adminer -p 8080:8080 --link postgres -d adminer

docker exec -it mongodb \
 mongo --host localhost -u gasorey -p mongo --authenticationDatabase admin \
  --eval "db.getSiblingDB('herois').createUser({user: 'gasorey2', pwd: 'admin', roles: [{role: 'readWrite', db: 'herois'}]})"