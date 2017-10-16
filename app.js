const express = require('express')
const http = require('http')

const app = express()
//app.use(express.static('static'))
app.set('view engine', 'pug')

const port = process.env.PORT || 3000
const host = 'localhost'
const server = http.createServer(app)
server.listen(port, host, () => {
	console.log(`Server listening at port ${port}`)
})
