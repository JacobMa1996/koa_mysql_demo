const router = require('koa-router')()
const { query } = require('../utils/query')
const {
  CREATE_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE
} = require('../utils/sql')

// 初始化数据库，创建表
query(CREATE_TABLE)

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
