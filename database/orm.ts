import * as Sequelize from 'sequelize'
import { Options } from 'sequelize'

import { define as defineTest, associate as associateTest } from './models/Test'
import { define as defineTestGroup, associate as associateTestGroup } from './models/TestGroup'

export const options: Options = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rootpassword',
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

// ---------------- 简单测试 ----------------

const { Test, TestGroup } = sequelize.models
async function main() {
    await TestGroup.drop()
    await TestGroup.sync()
    await Test.drop()
    await Test.sync()
    await Test.create({ groupNo: 'no.1', name: 'xixi' })
    await Test.create({ groupNo: 'no.1', name: 'hehe' })
    await TestGroup.create({ groupNo: 'no.1', name: 'haha' })
    // 多关联一
    const ts = await Test.findAll({
        include: [{
            model: TestGroup,
            where: { name: 'haha' },
        }],
    })
    console.log(JSON.stringify(ts, null, 2))
    // 一关联多
    const tg = await TestGroup.findOne({
        where: { name: 'haha' },
    })
    const tgt = await tg.getTests()
    console.log(JSON.stringify(tgt, null, 2))
}
if (require.main === module) {
    main().then(() => process.exit(0))
}
