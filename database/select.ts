import { sequelize, print, init } from './orm'

const { Test, TestGroup } = sequelize.models

async function select() {

    // 多关联一
    const t = await Test.findAll({
        include: [{
            model: TestGroup,
            where: { name: 'haha' },
        }],
    })
    const time = t[0].time
    // print(t)

    // 一关联多
    const tg = await TestGroup.findOne({
        where: { name: 'haha' },
    })
    const tgt = await tg.getTests()
    // print(t)

    // 使用sequelize的方法
    const ts = await Test.findAll({
        attributes: [
            'groupNo',
            [sequelize.fn('sum', sequelize.col('quantity')), 'sum'],
            [sequelize.literal('AVG(`quantity`)'), 'avg'],
        ],
        where: { groupNo: 'no.1' }
    })
    // print(ts)
}

if (require.main === module) {
    init().then(() => select()).then(() => process.exit(0))
}
