import { combineReducers } from 'redux'

import weathers from './weathers'
import trips from './trips'

export default combineReducers({
  weathers,
  trips
})
