const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('/api/v1/weather', (req, res) => {
	request
	.get('https://www.metaweather.com/api/location/2348079/')
	.then(response => res.json(response.body))
})

module.exports = server
