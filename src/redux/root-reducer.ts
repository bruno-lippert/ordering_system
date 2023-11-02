import { combineReducers } from "redux";

import productsReducer from './products/slice'

const rootReducer = combineReducers({ productsReducer });

export default rootReducer;