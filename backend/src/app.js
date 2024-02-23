const express = require('express')
const cors = require('cors')
const config = require('./config')
const routes = require('./routes')
const { errorHandler } = require("./util/errors")

const PORT = config.Express.Port
const app = express()

//middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api', routes)

// error handling
app.use(errorHandler)

// functions
const StartServer = () => {
  app.listen(PORT, () => {
    console.log(`Express running on port ${PORT}`)
  })
}

module.exports = StartServer