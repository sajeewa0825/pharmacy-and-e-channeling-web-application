import { combineReducers } from "redux";
import addressFormReducer from "./addressFormReducer";

const rootReducers=combineReducers({
    AddressForm:addressFormReducer
})

export default rootReducers