import { getWeathers } from '../apis/weathers'

export const SET_WEATHER = 'SET_WEATHER'

export function setWeather (weatherNames) {
  return {
    type: SET_WEATHER,
    weatherNames
  }
}

export function fetchWeathers() {
  return dispatch => {
    return getWeathers()
      .then(weatherNames => {
        dispatch(setWeather(weatherNames))
        return null
      })
  }
}
