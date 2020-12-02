const connection = require('./connection')


//get the matching weather from the api and use it to get a name of the 'trip'
function getWeather (code, db = connection) {
  return db('weather')
  .select()
    .where(code)
}

module.exports = {
  getWeather
}
