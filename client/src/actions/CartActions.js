import {ADD_CART_DATA} from "./type"

export const CartData= (props) =>{
    return{
        type:ADD_CART_DATA,
        payload:props
        
    }
}