const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  reserved: Boolean,
  size: Number
})

module.exports = mongoose.model('Room', roomSchema)