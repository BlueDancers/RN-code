import { combineReducers } from 'redux'
import { reducer as homePopular } from '../src/home/Popular/store/index'



export default combineReducers ({
  homePopular: homePopular
})
