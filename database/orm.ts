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

// ---------------- 简单测试 ----------------

const { Test, TestGroup } = sequelize.models
const log = r => console.log(JSON.stringify(r, null, 2))
async function main() {
    await TestGroup.drop()
    await TestGroup.sync()
    await Test.drop()
    await Test.sync()
    await TestGroup.create({ groupNo: 'no.1', name: 'haha' })
    await Test.create({ groupNo: 'no.1', name: 'xixi', quantity: 17 })
    await Test.create({ groupNo: 'no.1', name: 'hehe', quantity: 7 })

    // 多关联一
    const t = await Test.findAll({
        include: [{
            model: TestGroup,
            where: { name: 'haha' },
        }],
    })
    // log(t)

    // 一关联多
    const tg = await TestGroup.findOne({
        where: { name: 'haha' },
    })
    const tgt = await tg.getTests()
    // log(t)

    // 使用sequelize的方法
    const ts = await Test.findAll({
        attributes: [
            'groupNo',
            [sequelize.fn('sum', sequelize.col('quantity')), 'sum'],
            [sequelize.literal('AVG(`quantity`)'), 'avg'],
        ],
        where: { groupNo: 'no.1' }
    })
    log(ts)
}
if (require.main === module) {
    main().then(() => process.exit(0))
}
