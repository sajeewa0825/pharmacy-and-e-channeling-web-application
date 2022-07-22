import {ADD_CART_DATA,REMOVE_FROM_CART} from "./type"

export const CartData= (props) =>{ 
    
    const data ={
        name:props.name,
        imgLink:props.imgLink,
        _id:props._id,
        price:props.price,
        qty:1
    }

    return{
        type:ADD_CART_DATA,
        payload:data
        
    }
}

export const removeFromCart = (id) => {
    return{
      type: REMOVE_FROM_CART,
      payload: id,
    }
}
