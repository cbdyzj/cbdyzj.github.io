import * as Sequelize from 'sequelize'
import { Options } from 'sequelize'
import { define as defineTest, associate as associateTest } from './models/Test'
import { define as defineTestGroup, associate as associateTestGroup } from './models/TestGroup'

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

export const sequelize = new Sequelize(options)

defineTest(sequelize, Sequelize)
defineTestGroup(sequelize, Sequelize)
associateTest(sequelize.models)
associateTestGroup(sequelize.models)

export const print = r => console.log(JSON.stringify(r, null, 2))

// ---------------- 建立表，初始化数据 ----------------

const { Test, TestGroup } = sequelize.models

export async function init() {
    // 新建表
    await TestGroup.drop()
    await TestGroup.sync()
    await Test.drop()
    await Test.sync()

    // 初始化数据
    await TestGroup.create({ groupNo: 'no.1', name: 'haha' })
    await Test.create({ groupNo: 'no.1', name: 'xixi', quantity: 17, time: new Date })
    await Test.create({ groupNo: 'no.1', name: 'hehe', quantity: 7, time: '2017-12-01 12:00:00' })
}

if (require.main === module) {
    init().then(() => process.exit(0))
}
