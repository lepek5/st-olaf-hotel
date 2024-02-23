const mongoose = require('mongoose')
const config = require('../config/index')
const Connect = () => {
  mongoose.connect(config.Mongo.URI)
  console.log('Connected to Mongoose Database')
}

module.exports = {
  Connect
}