'use strict'

const http = require('http')
const app = require('./src/app')

const port = process.env.port || 5000
const server = http.createServer(app)

server.listen(port, () => {
    console.log('Rodando em http://localhost:' + port)
})