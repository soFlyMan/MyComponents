var router = require('koa-router')()
var Author  = require('../models/author.js')

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'soFy'
  }
  // var soFly = new Author({name: 'soFly'})
  //
  // await soFly.save(function (err) {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         console.log('author saved')
  //       }
  //     })
  await ctx.render('index')
})

router.get('/foo', async function (ctx, next) {
  await ctx.render('index', {
    title: 'koa2 foo'
  })
})

module.exports = router
