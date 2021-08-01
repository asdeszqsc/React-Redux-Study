import { GET_USER } from "../_Actions/types";

export default function (state = {}, action){
    switch(action.type){
        case GET_USER: return {...state, users: action.payload};
        default: return state;
    }
}