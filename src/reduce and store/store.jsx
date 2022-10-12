import { combineReducers, createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import CakeReducer from './reducer/CakeReducer'
import toggleReducer from './reducer/toggleReducer'
const reducer = combineReducers({
    cake: CakeReducer,
    toggle: toggleReducer
})

export const store = createStore(reducer,{},applyMiddleware(thunk))