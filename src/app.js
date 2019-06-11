const express = require('express')
const app = express()

app.use('views', 'views')
app.use('view engine', 'pug')

app.get('/', (req, res) => {
    res.send({ status: 1, data: { userId: 1, psc: 2 }})
})

app.get('/dash', (req, res) => {
    res.render('pages/dash') //dash.pug => views/pages/dash.pug
})

module.app = app