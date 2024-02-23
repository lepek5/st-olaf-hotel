const Room = require('../models/Room')
const { createError } = require("../util/errors")

const getAll = async () => {
  try {
    const rooms = await Room.find()
    return rooms
  } catch (err) {
    throw createError(504, "Failed to get rooms")
  }
}

module.exports = {
  getAll
}