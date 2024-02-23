const roomService = require('../services/room.service')
const { createError } = require("../util/errors")

const getAll = async (req, res, next) => {
  try {
    const rooms = await roomService.getAll()
    res.status(200).json({'rooms': rooms})
  } catch(err) {
    next(createError(500, 'Failed to fetch rooms'))
  }
}

module.exports = {
  getAll
}