const {Router} = require('express')
const newMessage = Router()
const {messages} = require('../data/messageData')

const year = new Date().getFullYear()

newMessage.get('/', (req, res) => {
    res.render('form', {message: "test", year: year})
})

newMessage.post('/', (req, res) => {
    let newID = messages.length > 0 ? messages[messages.length-1].id + 1 : 1;
    let userName = req.body.userName
    let userMessage = req.body.userMessage
    let timeStamp = new Date();
    messages.push({id: newID, userName: userName, userMessage: userMessage, timeStamp: timeStamp})
    res.redirect('/')
})

module.exports = {newMessage}