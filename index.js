const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const students = require('./routes/students')

require('dotenv').config()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/v1/students', students)

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})