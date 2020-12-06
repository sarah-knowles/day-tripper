import { getWeathers } from '../apis/weathers'
import { getTrips } from '../apis/googleMap'
// import {conditionToday} from '../components/Weather'

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

// export function setBackground(conditionToday) {
//   return {
//     type: SET_BACKGROUND,
//     background: conditionToday
//   }
// }

export function fetchWeathers() {
  //console.log('test')
  return dispatch => {
    getWeathers()
      .then(weathers => {
        dispatch(setWeather(weathers))
        return null
      })
  }
}

// export function fetchBackground() {
//   return dispatch => {
//     dispatch(setBackground(conditionToday))
//   }
// }

export function fetchTrips() {
  return dispatch => {
    getTrips()
      .then(trips => {
        dispatch(setTrips(trips))
        return null
      })
  }
}