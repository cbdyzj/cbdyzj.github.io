'use strict'
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'rootpassword',
    database: 'sys',
})

connection.connect()
const query = (...args) =>
    new Promise((resolve, reject) =>
        connection.query(...args, (error, results, fields) =>
            error ? reject(error) : resolve({ results, fields })))

async function q() {
    const { results } = await query('SELECT ? FROM host_summary', ['host'])
    console.log(results)
    connection.end()
}

q.call()