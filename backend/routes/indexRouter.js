const {Router} = require('express')
const indexRouter = Router()
const {messages} = require('../data/messageData')

const year = new Date().getFullYear()

indexRouter.get('/', (req, res) => {
    res.render('index', {messages: messages, year: year})
})

module.exports = {indexRouter}