const Room = require('../models/Room')
const { createError } = require("../util/errors")

const getAll = async () => {
  try {
    const rooms = await Room.find()
    return rooms
  } catch (err) {
    console.error('Get All Rooms', err)
    throw createError(504, "Failed to get rooms")
  }
}

const getById = async (id) => {
  try {
    const room = await Room.findById(id)
    return room
  } catch (err) {
    console.error('GetById', id, err)
    throw err
  }
}

const createRoom = async (request) => {
  try {
    const room = await Room.create(request)
    return room
  } catch (err) {
    console.error('Create Room', err)
    throw err
  }
}

const updateById = async (id, request) => {
  try {
    const updated = await Room.findByIdAndUpdate(id, request, {
      // return updated object
      new: true
    })
    return updated
  } catch (err) {
    console.error('Update room by id', id, request)
    throw err
  }
}

const deleteById = async (id) => {
  try {
    const deleted = await Room.findByIdAndDelete(id)
    console.log(deleted)
    return deleted
  } catch (err) {
    console.error('Delete room by id', id, err)
    throw err
  }
}

module.exports = {
  getAll,
  createRoom,
  getById,
  updateById,
  deleteById
}