import { getWeathers } from '../apis/weathers'
// import {conditionToday} from '../components/Weather'
import  { geoLocate } from '../apis/weathers'

export const SET_WEATHERS = 'SET_WEATHERS'
export const SET_BACKGROUND = 'SET_BACKGROUND'

export function setWeather (weathers) {
  return {
    type: SET_WEATHERS,
    weathers
  }
}

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
