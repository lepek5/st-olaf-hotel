require('dotenv').config()
module.exports = {
  Express: {
    Port: process.env.EXPRESS_PORT || 2020
  },
  Mongo: {
    URI: process.env.MONGO_URI
  }
}