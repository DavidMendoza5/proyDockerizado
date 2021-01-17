const express = require('express')
const routes = express.Router()

const ctrStudent = require('../controller/students')

routes.post('/', (req,resp) => {
    let { body } = req
    let status = 201, msg = 'Datos guardado'
    let ok = ctrStudent.postStudent(body)
    if(!ok) {
        status = 401,
        msg = 'Datos inválidos'
    }

    return resp.status(status).send({
        status: status,
        msg: msg,
        data: body
    })
})

module.exports = routes