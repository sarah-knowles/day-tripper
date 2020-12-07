import { SET_TRIPS } from '../actions'

const initialState = []

const trips = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIPS:
      return action.trips
    default:
      return state
  }
}

export default trips
