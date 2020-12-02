import { SET_WEATHERS } from '../actions'

const initialState = []

const weathers = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHERS:
      return action.weathers
    default:
      return state
  }
}

export default weathers