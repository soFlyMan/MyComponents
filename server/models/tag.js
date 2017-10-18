const mongoose = require('mongoose')
const tagSchema = require('./tagSchema')

module.exports = mongoose.model('tag', tagSchema)
