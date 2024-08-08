const {Router} = require('express')
const newMessage = Router()
const messages = require('../data/messageData')

newMessage.get('/', (req, res) => {
    res.render('form', {message: "test"})
})

newMessage.post('/', (req, res) => {
    userName = req.body.userName
    userMessage = req.body.userMessage
    timeStamp = new Date();
    messages.push({userName: userName, userMessage: userMessage, timeStamp: timeStamp})
    res.redirect('/')
})

module.exports = {newMessage}