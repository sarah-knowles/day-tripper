import request from 'superagent'

const rootUrl = 'https://www.metaweather.com/api/location/search/?lattlong='

export async function geoLocate() {
}

export function getWeathers(lat, lng) {
  // let userLocation = {}
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   userLocation = { latt: position.coords.latitude, long: position.coords.longitude }
  //   console.log(userLocation)
  //   return userLocation
  // })
  console.log(lat, lng)
  return request
    .get(`${rootUrl}${lat},${lng}`)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}