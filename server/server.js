const express = require('express')
const path = require('path')
const request = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('/api/v1/weathers', (req, res) => {
	request
	.get('https://www.metaweather.com/api/location/2348079/')
    .then(response => res.json(response.body))
})


server.get('/api/v1/google', (req, res) => {
	request
	.get('')
		.then(response => res.json(response.body))
		console.log(response.body)
})


module.exports = server
