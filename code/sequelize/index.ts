import * as Sequelize from 'sequelize'
import { Options } from 'sequelize'
import models from './models/index'

export const options: Options = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
    timezone: '+08:00',
    isolationLevel: 'READ COMMITTED',
    operatorsAliases: false,
}

// 定义模型
export const sequelize = new Sequelize(options)
models.forEach(model => model.define(sequelize, Sequelize))
models.forEach(model => model.associate(sequelize.models))

// ---
async function ut() {
    const { Foo, Bar } = sequelize.models
    await Foo.sync({ force: true })
    await Bar.sync({ force: true })
    await Foo.create({ name: 'key', content: 'foo' })
    await Bar.create({ name: 'key', content: 'bar1' })
    await Bar.create({ name: 'key', content: 'bar2' })

    const result = await Foo.findOne({
        attributes: ['id', 'name', 'content'],
        where: { name: 'key' },
        include: [{ model: Bar, attributes: ['id', 'name', 'content'] }]
    })
    console.log(JSON.stringify(result, null, 2))
}

if (require.main === module) {
    ut().then(() => process.exit())
}