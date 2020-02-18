import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import search from "./reducers/searchReducer";
import logger from 'redux-logger'

export default createStore(
    combineReducers({
      search
    }),
    applyMiddleware(thunk, logger, promise)
);