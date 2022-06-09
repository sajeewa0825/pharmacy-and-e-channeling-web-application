import {ADDRESS_FORM_DATA_SEND} from "../actions/type"

export default function(state=null,actions){
    switch(actions.type){
        case ADDRESS_FORM_DATA_SEND:
            return actions.payload;
            break;
    }
    return state
}