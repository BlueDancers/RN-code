import actionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
  data: 'my is redux!!!!'
})

export default (state = defaultState, action) => {
  if (action.type == actionTypes.CHANGE) {
    return state.set('data','change Redux!!!')
  }
  return state
}
