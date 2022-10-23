import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import StateReducer from "./reducers"

export const store = createStore(StateReducer, applyMiddleware(thunk))