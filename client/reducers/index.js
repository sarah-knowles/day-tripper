import { combineReducers } from 'redux'

import weathers from './weathers'
import trips from './trips'
import weatherLocation from './weatherLocation'

export default combineReducers({
  weathers,
  trips,
  weatherLocation
})
