const router = require('express').Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.getAll)
router.get('/:id', userController.getById)

router.post('/', userController.createUser)

router.put('/:id', userController.updateById)
router.delete('/:id', userController.deleteById)

module.exports = router