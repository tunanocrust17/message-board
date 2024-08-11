const {Router} = require('express')
const viewMessage = Router()
const {messages} = require('../data/messageData')

const year = new Date().getFullYear()

viewMessage.get('/:id', (req, res) => {
    let messageID = parseInt(req.params.id);
    let message = messages.find(msg => msg.id === messageID)
    res.render('message', {message: message, year: year})
})

module.exports = {viewMessage}