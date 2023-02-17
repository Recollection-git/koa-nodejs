// import { database } from './config/index'
const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors') //解决跨域问题
const koaBody = require('koa-body')
// const Mysql = require('mysql') //连接数据库
const router = new Router()
const app = new Koa()
// Mysql.createPool({
//     host: database.HOST,
//     user: database.USER,
//     password: database.PASSWARD,
//     database: database.DATABASE,
//     connectionLimit: database.CONNECTIONLIMIT //连接池默认是10个
// });
router.get('/hello', (ctx, next) => {
    //get使用ctx.request.query接收参数
    // ctx.response.status = 200;
    const jsonStr = {
        name: 'demo',
        text: 'this is an demo'
    }
    ctx.response.message = JSON.stringify(jsonStr)
})
router.post('/demo', (ctx, next) => {
    // ctx.response.status = 200;
    // const { name, idx } = ctx.request.body
    ctx.response.message=JSON.stringify(ctx.request.body)
    // console.log(name, idx)
})
app.use(cors())
app.use(koaBody.koaBody())
app.use(router.routes())
app.listen(8099)