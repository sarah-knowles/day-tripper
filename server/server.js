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
	//then kick off google places api call
	//.get('http://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + 'lat & long' + '&radius=1000&type= &keyword= ' + '&key=OUR_API_KEY')
})

module.exports = server
