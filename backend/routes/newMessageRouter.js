const {Router} = require('express')
const newMessage = Router()
const {messages} = require('../data/messageData')

newMessage.get('/', (req, res) => {
    res.render('form', {message: "test"})
})

newMessage.post('/', (req, res) => {
    let userName = req.body.userName
    let userMessage = req.body.userMessage
    let timeStamp = new Date();
    messages.push({userName: userName, userMessage: userMessage, timeStamp: timeStamp})
    res.redirect('/')
})

module.exports = {newMessage}