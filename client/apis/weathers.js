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
  console.log('getWeathers')
  console.log(woeid)
  return request
    .get(`/api/v1/weathers/${woeid}`)
    .then(res => {
      console.log(res.body)
      return res.body
    })
    .catch(errorHandler('GET'), `${serverURL}/weathers`)
}