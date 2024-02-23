const router = require('express').Router()
const roomController = require('../controllers/room.controller')

router.get('/', roomController.getAll)
router.get('/:id', roomController.getById)

router.post('/', roomController.createRoom)

router.put('/:id', roomController.updateById)
router.delete('/:id', roomController.deleteById)

module.exports = router