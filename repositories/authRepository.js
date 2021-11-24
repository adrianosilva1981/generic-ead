// const connService = require('../services/mysqlConnect')

exports.authorize = async (email) => {
    // const query = `SELECT * FROM users WHERE email = '${email}' LIMIT 1;`
    // return await connService.execQuery(query)

    return [
        {
            id: 1,
            email: 'test@test.com',
            name: 'Adriano Silva',
            password: '123456'
        }
    ]
}