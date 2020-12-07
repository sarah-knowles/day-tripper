const express = require('express')

const db = require('../db/weather')

const router = express.Router()

router.get('/', (req, res) => {
  db.getWeather()
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
