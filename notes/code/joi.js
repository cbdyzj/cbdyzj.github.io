import test from 'ava'
import joi from 'joi'

test('joi test', t => {

    const 人模式 = joi.object({
        名字: joi.string().max(10),
        洋文名: joi.string().max(10).alphanum(),
        年龄: joi.number().integer().max(100).min(0),
        性别: joi.string().regex(/男|女/)
    })

    const 小马哥 = { 名字: '小马哥', 年龄: 17, 洋文名: 'ma', 性别: '男' }

    let result = joi.validate(小马哥, 人模式)
    t.is(result.error, null)
})