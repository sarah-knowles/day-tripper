import request from 'superagent'

const rootUrl = '/api/v1'
//const googleURL = '?key=AIzaSyCQp5vJIqasej3dl1FEkkjmvuXYzT2hk9w&cx=b03569b1cf26aa1b9&q='


export function getWeathers() {
  return request.get(rootUrl + '/weathers')
    .then(res => {
      return res.body
    })
  }


export function getSearch(weatherCode) {
//console.log("code", weatherCode )

// if (weatherCode == 'hc' || 's') {
//   return 'good'
// } else if (weatherCode == 'lc' || 'c') {
//   return 'ok'
// } else if (weatherCode == 'h' || 't' || 'hr') {
//   return 'awful'
// } else console.log('Broken')


//function to build a url using the URL plus search term
return request
  .get('https://www.googleapis.com/customsearch/v1?key=AIzaSyCQp5vJIqasej3dl1FEkkjmvuXYzT2hk9w&gl=NZ&cx=b03569b1cf26aa1b9&q=' + 'beach') 
    .then(res => {
      console.log(res)
      return res.body
    })

  }