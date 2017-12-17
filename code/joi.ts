import * as assert from 'assert'
import * as joi from 'joi'

const PersonSchema = joi.object({
    name: joi.string().max(10),
    nickname: joi.string().max(10).alphanum(),
    age: joi.number().integer().max(100).min(0),
    gender: joi.string().regex(/男|女/)
})

const ma = { name: '小马哥', nickname: 'ma', age: 17, gender: '男' }

const result = joi.validate(ma, PersonSchema)
assert(!result.error)
