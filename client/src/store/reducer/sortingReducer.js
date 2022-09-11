import {FILTER_SORT} from '../actionNames';
function sortingReducer(state= [], action){
    switch(action.type){
        case FILTER_SORT:
            return{
                ...state,
                sortedProducts: action.payload
            }
        default:
            return state;
    }
}


export default sortingReducer;