db.auth('root', 'root')
db.getSiblingDB('ead')
db.createUser(
    {
        user: 'user',
        pwd: '123456',
        roles: [
            {
                role: 'readWrite',
                db: 'ead'
            }
        ]
    }
);