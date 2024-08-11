const express = require('express')
const path = require('node:path')
const { indexRouter } = require( './routes/indexRouter')
const {newMessage} = require('./routes/newMessageRouter')
const {viewMessage} = require('./routes/messageRouter')

const app = express()

app.set('views', path.join(__dirname,'../frontend', 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, '../frontend', 'public');
app.use(express.static(assetsPath));

app.use('/', indexRouter)
app.use('/new', newMessage)
app.use('/message', viewMessage)

const PORT = 3000
app.listen(PORT, console.log(`Server running on port ${PORT}`))