import request from 'superagent'

const rootUrl = '/api/v1'
const googleURL = 'https://www.googleapis.com/customsearch/v1?key=[OUR_API_KEY]&cx=b03569b1cf26aa1b9&q='


export function getWeathers() {
  return request.get(rootUrl + '/weathers')
    .then(res => {
      return res.body
    })
  }


export function getSearch(code) {
console.log("code", code )
//function to build a url using the URL plus search term
  return request.get(googleURL)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}  