import {combineReducers} from 'redux'

import pizzaReducer from './Pizza'

export default combineReducers({
    cprice:pizzaReducer
})