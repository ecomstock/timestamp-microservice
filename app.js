const express = require('express')
const http = require('http')

const app = express()
//app.use(express.static('static'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('index')
})

const port = process.env.PORT || 3000
const host = 'localhost'

app.listen(port, host, () => {
	console.log(`Server listening at port ${port}`)
})
