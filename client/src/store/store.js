import { applyMiddleware,compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducer";
const middleware=[thunk];
const initialState={};

const store =createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )

)

export default store;
