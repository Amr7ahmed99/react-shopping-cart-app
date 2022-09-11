import { combineReducers } from "redux";
import productReducer from "./reducer/productReducer";
import sortingReducer from "./reducer/sortingReducer";
import catergotyReducer from "./reducer/categoryReducer";
export default combineReducers({
    products: productReducer,
    sortedProducts: sortingReducer,
    category: catergotyReducer
});