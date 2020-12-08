require('dotenv').config()
const express = require('express')
const path = require('path')
const request = require('superagent')
// console.log(process.env.REACT_APP_CLIENT_SECRET)
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('/api/v1/weathers', (req, res) => {
  request
    .get('https://www.metaweather.com/api/location/search/?lattlong=')
    .then(response => res.json(response.body))
})

server.get('/api/v1/google', (req, res) => {
  request
    .get('https://maps.google.com/maps/?q=')
    .then(response => res.json(response.body))
})

server.get('/api/v1/gmap', (req, res) => {
  const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
  const parameters = {
    client_id: 'FEYZK4IJDHO2ICJHSXQNNIIVEGPFDLHTOTYZDCGS5EB54DII',
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    categoryId: '4bf58dd8d48988d163941735',
    near: 'Auckland',
    v: '20201206'
  }

  request
    .get(endPoint + new URLSearchParams(parameters))
    .then(response =>
      res.json(response.body)
    )
})

module.exports = server
