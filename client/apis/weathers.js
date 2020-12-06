import request from 'superagent'

const rootUrl = '/api/v1/weathers'
//const googleURL = '?key=[OUR_API_KEY]&cx=b03569b1cf26aa1b9&q='


export function getWeathers() {
  let userLocation = {}
  navigator.geolocation.getCurrentPosition(function(position) {
    //console.log("Latitude is :", position.coords.latitude);
    //console.log("Longitude is :", position.coords.longitude);
    userLocation = {latt: position.coords.latitude, long: position.coords.longitude}
    //console.log(userLocation)
     return userLocation
  });
 
  return request
  .get(rootUrl + (userLocation.latt, userLocation.long))
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
  .get('https://www.googleapis.com/customsearch/v1?key=AIzaSyCQp5vJIqasej3dl1FEkkjmvuXYzT2hk9w&gl=NZ&near=Takapuna&cx=b03569b1cf26aa1b9&q=' + 'cinema') 
    .then(res => {
      console.log(res.req.url)
      return res.req.url
    })

  }