import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

function errorHandler(method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: You need to implement an API route for ${method} ${route}`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}

export function getWeathers(woeid) {
  return request
    .get(`/api/v1/weathers/${woeid}`)
    .then(res => {
      (res.body)
      return res.body
    })
    .catch(errorHandler('GET'), `${serverURL}/weathers`)
}