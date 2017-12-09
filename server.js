const Koa = require('koa')
const serve = require('koa-static')
new Koa().use(serve(__dirname)).listen(3000)
