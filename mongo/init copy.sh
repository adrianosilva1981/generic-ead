mongo --eval "use admin"
mongo --eval "db.auth('root', 'root');"
mongo --eval "db.getSiblingDB('$MONGODB_NAME'); db.createUser({ user: '$MONGODB_USER', pwd: '$MONGODB_PASS', roles: [{ role: 'readWrite', db: '$MONGODB_NAME' }] });"