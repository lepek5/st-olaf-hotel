const roomService = require('../services/room.service')
const { createError } = require("../util/errors")

const getAll = async (req, res, next) => {
  try {
    const rooms = await roomService.getAll()
    res.status(200).json(rooms)
  } catch (err) {
    return next(err)
  }
}

const getById = async (req, res, next) => {
  const { id } = req.params
  if (!id) return next(createError(400, 'Id is required'))
  try {
    const room = await roomService.getById(id)
    res.status(200).json(room)
  } catch (err) {
    return next(err)
  }
}

const createRoom = async (req, res, next) => {
  const roomReq = req.body
  if (!roomReq || !roomReq.type || !roomReq.size || !(roomReq.reserved != true || roomReq.reserved != false)) {
    return next(createError(400, "Request body empty or missing fields"))
  }
  try {
    const newRoom = await roomService.createRoom(roomReq)
    res.status(201).json(newRoom)
  } catch (err) {
    return next(err)
  }
}

const updateById = async (req, res, next) => {
  const updateRequest = req.body
  const { id } = req.params
  if (!updateRequest) return next(createError(400, 'Missing request body'))
  if (!id) return next(createError(400, 'Id is required'))
  try {
    const updated = await roomService.updateById(id, updateRequest)
    res.status(200).json(updated)
  } catch (err) {
    return next(err)
  }
}

const deleteById = async (req, res, next) => {
  const { id } = req.params
  if (!id) return next(createError(400, 'Missing id'))
  try {
    const deleted = await roomService.deleteById(id)
    if (!deleted) return next(createError(400, `Id ${id} not found`))
    res.status(204)
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  getAll,
  createRoom,
  getById,
  updateById,
  deleteById
}