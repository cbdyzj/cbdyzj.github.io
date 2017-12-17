const jwt = require('jsonwebtoken')

// 生成token
const token = jwt.sign({ payload: 'payload' }, 'shhhhh')
console.log(token)

// 验证token
const decoded = jwt.verify(token, 'shhhhh')
console.log(decoded)
