import { getWeathers } from '../apis/weathers'
import { getTrips } from '../apis/googleMap'
// import {conditionToday} from '../components/Weather'
import  { geoLocate } from '../apis/weathers'

export const SET_WEATHERS = 'SET_WEATHERS'
export const SET_BACKGROUND = 'SET_BACKGROUND'
export const SET_TRIPS = 'SET_TRIPS'

export function setWeather(weathers) {
  return {
    type: SET_WEATHERS,
    weathers
  }
}

<<<<<<< HEAD
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

=======
>>>>>>> master
export function fetchWeathers() {
 
  //console.log('test')
  return dispatch => {
      geoLocate()
     .then(res =>  console.log(res))
  
    getWeathers()
      .then(weathers => {
        dispatch(setWeather(weathers))
        return null
      })
    
  //.catch(error => console.log(error))
  }
}
<<<<<<< HEAD

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
=======
>>>>>>> master
