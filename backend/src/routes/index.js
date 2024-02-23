const router = require('express').Router()
const roomRouter = require('./room.routes')

router.use('/rooms', roomRouter)

module.exports = router