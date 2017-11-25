import * as Sequelize from 'sequelize'
import { Options } from 'sequelize'

import { define as defineTest, associate as associateTest } from './models/Test'
import { define as defineTestGroup } from './models/TestGroup'

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

// ---------------- 简单测试 ----------------

const { Test, TestGroup } = sequelize.models
async function main() {
    await TestGroup.drop()
    await TestGroup.sync()
    await Test.drop()
    await Test.sync()
    await TestGroup.create({ id: 1, name: '组1' })

    const t = await Test.findOrBuild({
        where: { name: 'haha' },
        defaults: {
            name: 'haha',
            groupId: 1,
        }
    })
    const tt = await t[0].save()
    console.log(tt.dataValues)
}
if (require.main === module) {
    main().then(() => process.exit(0))
}
