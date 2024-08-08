const express = require('express')
const path = require('node:path')

const app = express()

app.set('views', path.join(__dirname,'../frontend', 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {message: "sup"})
})

const PORT = 3000
app.listen(PORT, console.log(`Server running on port ${PORT}`))