import request from 'superagent'

export const getTrips = (city) => {
  return request
    .get(`/api/v1/gmap/${city}`)
    .then(response => {
      return response.body.response.groups[0].items
    })
    .catch(error => {
      console.log('ERROR' + error)
    })
}
