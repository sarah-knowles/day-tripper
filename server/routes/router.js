const express = require('express')

const db = require('../db/weather')

const router = express.Router()

router.get('/', (req, res) => {
  db.getWeather()
    .then(result => {
      res.json(result)
      // var condition = result.props.weather
      //.then (db.trips) filter by code
      //run getLocation()
      // pass 'activity' & location to google (map over for 3 results)
      //return {results[0].title & .link & .pagemap.cse_thumbnail}
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
