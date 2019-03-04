import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import getReducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

export const initStore = initState => createStore(getReducers(), initState || {}, composeWithDevTools(applyMiddleware(thunkMiddleware)) )