// import {compineReducers} from 'redux';

// export default compineReducers({
//     // proRed: productReducer
// });

import {SET_PRODUCTS, FILTER_SORT, SET_CATEGORY} from './actionNames';
function productReducer(state= [], action){
    switch(action.type){
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case FILTER_SORT:
            return{
                ...state,
                Sorted_products: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                categoty: action.payload
            }
        default:
            return state;
    }
}


export default productReducer;