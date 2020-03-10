// import { combineReducers } from 'redux';
import {combineReducers} from '@reduxjs/toolkit'
import exampleReducer from './example/example'

const rootReducer = combineReducers({
    example:exampleReducer
});

export default rootReducer;