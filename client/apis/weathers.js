import request from 'superagent'

const rootUrl = '/api/v1'

export function getWeathers() {
  return request.get(rootUrl + '/weathers')
    .then(res => {
      console.log('api calls...', res.body)
      return res.body
    })
}
