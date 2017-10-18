var router = require('koa-router')()
var Blog = require('../models/blog')
var Tag = require('../models/tag')

router.prefix('/blog')

router.get('/getAllBlogs', async function(ctx, next) {
  await Blog.find({}, function(err, blogs) {
    if(err) return err
    return ctx.body = blogs
  })
})
router.get('/getBlogs', async function(ctx, next) {
  const tagName = 'Life'
  await Blog.findByTag(tagName, function(err) {
    if(err) console.log(err)
    console.log('have found!')
  })
})


router.get('/addTag', async function(ctx, next) {
  const tagName = ctx.body.req_query.name

  await Tag.isExisted(tagName, function(err) {
    var tag = new Tag({
      name: tagName,
    })
    tag.save(function(err) {
      if(err) return console.log(123)
      console.log('saved!')
    })
  })
})

router.get('/getAllTags', async function(ctx, next) {
  await Tag.find({}, function(err, tags) {
    if(err) return err
    return ctx.body = tags
  })
})

router.get('*', async function(ctx, next) {
  await ctx.render('index')
})
module.exports = router
