const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')()
const logger = require('koa-logger')
const db = require('./db/db-mongo')

const index = require('./routes/index')
const users = require('./routes/users')
const blog = require('./routes/blog')


// error handler
onerror(app)

// middlewares
app.use(bodyparser)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/dist'))

app.use(views(__dirname + '/views', {
  extension: 'jade'
}))

// logger
app.use(async (ctx, next) => {
  let url = ctx.url

  // 从上下文的request对象中获取
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring

  // 从上下文中直接获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring

  if(ctx.method === 'GET') {
    ctx.body = {
      url,
      req_query,
      req_querystring,
      ctx_query,
      ctx_querystring
    }
  } else if(ctx.method === 'POST') {
    console.log(ctx.request.body)
    // let postData = await parsePostData( ctx )
    // ctx.postBody = postData
    // console.log('post', ctx.body)
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }

  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 解析上下文里node原生请求的POST参数
// function parsePostData( ctx ) {
//   return new Promise((resolve, reject) => {
//     try {
//       let postdata = "";
//       ctx.req.addListener('data', (data) => {
//         postdata += data
//       })
//       ctx.req.addListener("end",function(){
//         let parseData = parseQueryStr( postdata )
//         resolve( parseData )
//       })
//     } catch ( err ) {
//       reject(err)
//     }
//   })
// }
//
// // 将POST请求参数字符串解析成JSON
// function parseQueryStr( queryStr ) {
//   let queryData = {}
//   let queryStrList = queryStr.split('&')
//   console.log( queryStrList )
//   for (  let [ index, queryStr ] of queryStrList.entries()  ) {
//     let itemList = queryStr.split('=')
//     queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
//   }
//   return queryData
// }
// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())

module.exports = app
