const express = require('express')
const http = require('http')
const port = 8888
const hostName = "localhost"

let server = http.createServer((request, response) => {
	response.end('Hello world')
})

server.listen(port, hostName)
console.log("Server listening at http://localhost:8888/")