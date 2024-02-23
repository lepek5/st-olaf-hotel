const router = require('express').Router()
const roomController = require('../controllers/room.controller')

router.get('/', roomController.getAll)

module.exports = router