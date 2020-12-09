import { getWeathers, geoLocate } from '../apis/weathers'
import { getTrips } from '../apis/googleMap'


export const SET_WEATHERS = 'SET_WEATHERS'
export const SET_BACKGROUND = 'SET_BACKGROUND'
export const SET_TRIPS = 'SET_TRIPS'
export const SET_LOCATION = 'SET_LOCATION'



export function setWeather(weathers) {
  return {
    type: SET_WEATHERS,
    weathers
  }
}

export function updateWeatherLocation(city) {
  return {
    type: SET_LOCATION,
    weatherLocation: city
  }
}

export function setTrips(trips) {
  return {
    type: SET_TRIPS,
    trips
  }
}

export function fetchWeathers(woeid) {
  console.log(woeid)
  return dispatch => {
    getWeathers(woeid)
      .then(weathers => {
        console.log(weathers)
        dispatch(setWeather(weathers))
        return null
      })

      .catch(error => console.log(error))
  }
}

export function fetchTrips(city) {
  return dispatch => {
    getTrips(city)
      .then(trips => {
        dispatch(setTrips(trips))
        return null
      })
      .catch(error => console.log(error))
  }
}

