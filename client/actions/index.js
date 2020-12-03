import { getWeathers } from '../apis/weathers'
// import {conditionToday} from '../components/Weather'

export const SET_WEATHERS = 'SET_WEATHERS'
export const SET_BACKGROUND = 'SET_BACKGROUND'

export function setWeather (weathers) {
  return {
    type: SET_WEATHERS,
    weathers
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