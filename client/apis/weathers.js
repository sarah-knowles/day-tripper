import request from 'superagent'

const rootUrl = 'https://www.metaweather.com/api/location/search/?lattlong='
//const googleURL = '?key=[OUR_API_KEY]&cx=b03569b1cf26aa1b9&q='


export function getWeathers() {
  let userLocation = {}
  navigator.geolocation.getCurrentPosition(function(position) {
    userLocation = {latt: position.coords.latitude, long: position.coords.longitude}
    //console.log(userLocation)
     return userLocation
  });

  return request
  .get(rootUrl + (userLocation.latt, + ' ,%', userLocation.long))
    .then(res => {
      console.log(res.body)
      return res.body
    })
    //.catch(error => console.log(error))
  }





export function getSearch(weatherCode) {
//console.log("code", weatherCode )

// if (weatherCode == 'hc' || 's') {
//   return 'cinema'
// } else if (weatherCode == 'lc' || 'c') {
//   return 'park'
// } else if (weatherCode == 'h' || 't' || 'hr') {
//   return 'go back to bed!'
// } else console.log('Broken')



//function to build a url using the URL plus search term
return request
  .get('https://www.googleapis.com/customsearch/v1?key=[OUR_API_KEY]&gl=NZ&near=Takapuna&cx=b03569b1cf26aa1b9&q=' + 'cinema') 
    .then(res => {
      console.log(res.req.url)
      return res.req.url
    })
    .catch(error => console.log(error))
  }