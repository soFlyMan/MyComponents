const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new Schema({
  name: {
    type: String,
    // unique: true,
  }
})

tagSchema.statics = {
  isExisted: function(tagName, cb) {
    this.find({name: tagName}, function(err, doc) {
      if(doc[0]) {
        console.log(doc)
        console.log('tag ' + tagName + ' has existed')
        return
      }
      if(err) console.log(err)
      cb()
    })
  },
  // isExisted: function(tagName, cb) {
  //   return new Promise((resolve, reject) => {
  //     this.find({name: tagName}).exec(function(err, doc) {
  //       if(doc[0]) {
  //         console.log('tag ' + tagName + ' has existed')
  //         if(err) reject(err)
  //         return
  //       }
  //       cb()
  //     })
  //   })
  // }
}

module.exports = tagSchema
