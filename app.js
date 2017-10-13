const express = require('express')
const http = require('http')

const app = express()
app.use(express.static('static'))
app.set('view engine', 'ejs')

let server = http.createServer((request, response) => {
	response.end('Hello world')
})

const port = process.env.PORT || 3000
const host = localhost
server.listen(port, hostName)
console.log("Server listening at http://localhost:8888/")