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

// 工具函数
export const print = r => console.log(JSON.stringify(r, null, 2))
// ---------------- 建立表，初始化数据 ----------------

const { Test, TestGroup } = sequelize.models

export async function init() {
    // 新建表
    await TestGroup.sync({ force: true })
    await Test.sync({ force: true })
    // 初始化数据
    await TestGroup.create({ groupNo: 'no.1', name: 'haha' })
    await Test.create({ groupNo: 'no.1', name: 'xixi', quantity: 17 })
    await Test.create({ groupNo: 'no.1', name: 'hehe', quantity: 7 })
}

if (require.main === module) {
    init().then(() => process.exit(0))
}
