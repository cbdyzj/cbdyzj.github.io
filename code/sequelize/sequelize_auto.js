// npm i -D sequelize-auto
// npm i -D mysql

const SequelizeAuto = require('sequelize-auto')

const option = {
    username: 'root',
    password: 'password',
    database: 'test',
    host: 'localhost',
    dialect: 'mysql',
    directory: __dirname,
    tables: ['村庄']
}

const auto = new SequelizeAuto(option.database, option.username, option.password, option)
auto.run(console.log.bind(console))
