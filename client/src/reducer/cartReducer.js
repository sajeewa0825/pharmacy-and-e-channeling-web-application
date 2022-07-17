import {ADD_CART_DATA} from "../actions/type"

const CART_INITIAL_STATE = {
    cartItems: [],
  };

export default function(state=CART_INITIAL_STATE,actions){
    switch(actions.type){
        case ADD_CART_DATA:
            const item = actions.payload;

            const existItem = state.cartItems.find((x) => x._id === item._id);
      
            if (existItem) {
              return {
                ...state,
                cartItems: state.cartItems.map((x) =>
                  x.product === existItem.product ? item : x
                ),
              };
            } else {
              return {
                ...state,
                cartItems: [...state.cartItems, item],
              };
            }
    }
    return state
}