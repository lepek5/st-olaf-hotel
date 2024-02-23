const userService = require('../services/user.service')
const { createError, IdRequiredError } = require("../util/errors")

const getAll = async (req, res, next) => {
  try {
    const users = await userService.getAll()
    res.status(200).json(users)
  } catch (err) {
    return next(err)
  }
}

const getById = async (req, res, next) => {
  const { id } = req.params
  if (!id) return next(IdRequiredError())
  try {
    const user = await userService.getById(id)
    res.status(200).json(user)
  } catch (err) {
    return next(err)
  }
}

const createUser = async (req, res, next) => {
  const userReq = req.body
  if (!userReq) {
    return next(createError(400, "Request body empty or missing fields"))
  }
  try {
    const newuser = await userService.createUser(userReq)
    res.status(201).json(newuser)
  } catch (err) {
    console.log(deleted)
    return next(err)
  }
}

const updateById = async (req, res, next) => {
  const updateRequest = req.body
  const { id } = req.params
  if (!updateRequest) return next(createError(400, 'Missing request body'))
  if (!id) return next(IdRequiredError())
  try {
    const updated = await userService.updateById(id, updateRequest)
    res.status(200).json(updated)
  } catch (err) {
    return next(err)
  }
}

const deleteById = async (req, res, next) => {
  const { id } = req.params
  if (!id) return next(IdRequiredError())
  try {
    const deleted = await userService.deleteById(id)
    if (!deleted) return next(createError(404, `Id ${id} not found`))
    res.status(204).send()
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  getAll,
  createUser,
  getById,
  updateById,
  deleteById
}