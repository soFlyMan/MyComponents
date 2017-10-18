const mongoose = require('mongoose')
const Schema = mongoose.Schema

const author = new Schema({
  name: {
    type: String,
    default: 'soFly',
    unique: true,
  }
})

module.exports = mongoose.model('author', author)
