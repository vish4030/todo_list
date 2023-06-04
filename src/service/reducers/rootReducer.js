import {combineReducers} from 'redux'
import todoStore from './reducer'


const rootReducer =  combineReducers({
    todoStore,
})


export default rootReducer;
