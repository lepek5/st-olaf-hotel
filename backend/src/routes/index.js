const router = require('express').Router()
const roomRouter = require('./room.routes')
const userRouter = require('./user.routes')

router.use('/rooms', roomRouter)
router.use('/users', userRouter)

module.exports = router