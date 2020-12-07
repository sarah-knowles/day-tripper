import request from 'superagent'

export const getTrips = () => {
  return request
    .get('/api/v1/gmap')
    .then(response => {
      return response.body.response.groups[0].items
    })
    .catch(error => {
      console.log('ERROR' + error)
    })
}
