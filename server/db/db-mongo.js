const mongoose = require('mongoose')
const config = require('./db-mongo-config.js')

const db = mongoose.connect("mongodb://" + config.HOST + ":" + config.PORT + "/" + config.NAME, { useMongoClient: true })

mongoose.Promise = global.Promise
console.log('connect mongo success')
module.exports = db
