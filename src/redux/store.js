import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import searchReducer from "./reducers/searchReducer";
import logger from 'redux-logger'

export default createStore(
    combineReducers({
      searchReducer
    }),
    applyMiddleware(thunk, logger, promise)
);