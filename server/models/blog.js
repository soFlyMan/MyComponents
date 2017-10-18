const mongoose = require('mongoose')
const Schema = mongoose.Schema
const tagSchema = require('./tagSchema')


const blog = new Schema({
  title: {
    type: String,
    unique: true,
  },
  author: {
    type: String,
    default: 'soFly',
  },
  body: String,
  tag: [tagSchema],
  meta: {
    createAt: {
      type: Date,
      default: Date.now(),
    },
    updateAt: {
      type: Date,
      default: Date.now(),
    },
    pv: {
      type: Number,
      default: 0,
    },
  },
  comments: [{
    body: String,
    date: Date,
  }],
})

// blog.pre('save', function(next) {
//   if(this.isNew) {
//     this.meta.createAt = this.meta.updateAt = Date.now()
//   } else {
//     this.meta.updateAt = Date.now()
//   }
//   next()
// })
//
// blog.statics = {
//   findByTag: function(tagName, cb) {
//     return this.find({ tag: tagName }).exec(cb)
//   },
// }
// blog.methods = {
//   findPageView: function() {
//     return this.pv
//   },
// }

// var BlogM = mongoose.model('blog', blog)
//
// var blog2 = new BlogM({
//   title: 'My test blog2',
//   body: '# its my test blog, this is body',
//   tag: [{name: 'life'}, {name: 'Technology'}],
// })
//
// blog2.save(function(err) {
//   if(err) console.log(err)
// })

module.exports = mongoose.model('blog', blog)
