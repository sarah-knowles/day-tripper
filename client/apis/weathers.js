import request from 'superagent'

const rootUrl = '/api/v1'

export function getWeathers() {
  return request.get(rootUrl + '/fruits')
    .then(res => {
      return res.body.name
    })
}
