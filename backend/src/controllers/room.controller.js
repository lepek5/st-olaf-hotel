const roomService = require('../services/room.service')

const getAll = async (req, res, next) => {
  try {
    const rooms = await roomService.getAll()
    res.status(200).json({'rooms': rooms})
  } catch(err) {
    next(err)
  }
}

module.exports = {
  getAll
}