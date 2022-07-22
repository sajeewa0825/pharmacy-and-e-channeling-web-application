import { combineReducers } from "redux";
import addressFormReducer from "./addressFormReducer";
import cartReducer from "./cartReducer";

const rootReducers=combineReducers({
    AddressForm:addressFormReducer,
    CartItem:cartReducer
})

export default rootReducers