
import {SET_CATEGORY} from '../actionNames';
function catergotyReducer(state= "", action){
    switch(action.type){
        case SET_CATEGORY:
            return action.payload
        default:
            return state;
    }
}


export default catergotyReducer;