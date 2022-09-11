import {SET_PRODUCTS} from '../actionNames';
function productReducer(state= [], action){
    switch(action.type){
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}


export default productReducer;