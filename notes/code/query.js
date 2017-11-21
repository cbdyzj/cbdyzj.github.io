'use strict'
const mysql = require('mysql2/promise');

const config = {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'sys',
}

async function main() {
    const connection = await mysql.createConnection(config)
    const [rows, fields] = await connection.execute('SELECT NOW();')
    console.log(rows)
}

if (require.main === module) {
    main().then(() => process.exit(0))
}
