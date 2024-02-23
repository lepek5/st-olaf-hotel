const User = require('../models/User')
const { createError } = require("../util/errors")

const getAll = async () => {
  try {
    const users = await User.find()
    return users
  } catch (err) {
    console.error('Get All Users', err)
    throw err
  }
}

const getById = async (id) => {
  try {
    const user = await User.findById(id)
    return user
  } catch (err) {
    console.error('GetById', id, err)
    throw err
  }
}

const createUser = async (request) => {
  try {
    const user = await User.create(request)
    return user
  } catch (err) {
    console.error('Create User', err)
    throw err
  }
}

const updateById = async (id, reques65d9114b527d0c6a9ccf125dt) => {
  try {
    const updated = await User.findByIdAndUpdate(id, request, {
      // return updated object
      new: true
    })
    return updated
  } catch (err) {
    console.error('Update User by id', id, request)
    throw err
  }
}

const deleteById = async (id) => {
  try {
    const deleted = await User.findByIdAndDelete(id)
    return deleted
  } catch (err) {
    console.error('Delete User by id', id, err)
    throw err
  }
}

module.exports = {
  getAll,
  createUser,
  getById,
  updateById,
  deleteById
}