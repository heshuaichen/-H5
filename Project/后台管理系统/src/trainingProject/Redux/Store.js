import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { DataDucer } from './DataDucer';


let root = combineReducers({
    data:DataDucer

})

let store = createStore(root)
export default store;