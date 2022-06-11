import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authreducer } from "./auth/auth.reducer";
import { feedreducer } from "./todofeed.js/feed.reducer";

const rootReducer = combineReducers({
    auth:authreducer,
    feeds:feedreducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));