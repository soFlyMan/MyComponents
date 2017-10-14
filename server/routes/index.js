var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'soFy'
  };

  await ctx.render('index');
})

router.get('/foo', async function (ctx, next) {
  await ctx.render('index', {
    title: 'koa2 foo'
  });
});

module.exports = router;
