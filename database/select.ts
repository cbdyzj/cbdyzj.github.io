import { sequelize, print, init } from './index'

const { Test, TestGroup } = sequelize.models

async function main() {
    await init()
    // 多关联一
    const t = await Test.findAll({
        where: { groupNo: 'no.1' },
        include: [TestGroup],
    })
    print(t)
}

if (require.main === module) {
    main().then(() => process.exit(0))
}
