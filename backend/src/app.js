const express = require('express')
const cors = require('cors')

app = express()

//middleware
app.use(cors())

module.exports = app