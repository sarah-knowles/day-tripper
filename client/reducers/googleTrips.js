import { SET_TRIPS } from '../actions'

const initialState = []

const googleTrips = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIPS:
      return action.googleTrips
    default:
      return state
  }
}

export default googleTrips
