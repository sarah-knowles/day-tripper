import { getWeathers } from '../apis/weathers'

export const SET_WEATHERS = 'SET_WEATHER'

export function setWeather (weathers) {
  return {
    type: SET_WEATHERS,
    weathers
  }
}

export function fetchWeathers() {
  console.log('test')
  return dispatch => {
    getWeathers()
      .then(weathers => {
        dispatch(setWeather(weathers))
        return null
      })
  }
}
