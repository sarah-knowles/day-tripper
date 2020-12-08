import { getWeathers, geoLocate } from '../apis/weathers'
import { getTrips } from '../apis/googleMap'

export const SET_WEATHERS = 'SET_WEATHERS'
export const SET_BACKGROUND = 'SET_BACKGROUND'
export const SET_TRIPS = 'SET_TRIPS'

export function setWeather(weathers) {
  return {
    type: SET_WEATHERS,
    weathers
  }
}

export function setTrips(trips) {
  return {
    type: SET_TRIPS,
    trips
  }
}

export function fetchWeathers() {
  return dispatch => {
    geoLocate()
      .then(res => console.log(res))

    getWeathers()
      .then(weathers => {
        dispatch(setWeather(weathers))
        return null
      })

      .catch(error => console.log(error))
  }
}

export function fetchTrips(city) {
  console.log(city)
  return dispatch => {
    getTrips(city)
      .then(trips => {
        console.log(trips)
        dispatch(setTrips(trips))
        return null
      })
      .catch(error => console.log(error))
  }
}
