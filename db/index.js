const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 15432,

    database: 'shop',
    password: '123',
    user: 'postgres',

    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}
