import { SET_PRODUCTS } from "./actionNames";
import axiosInstance from '../components/Global/axiosConfig/axiosConfig';
function changeProducts(category){
    return (dispatch)=>{
        axiosInstance
        .get(`${category}`)
        .then( (res)=> { dispatch( {type: SET_PRODUCTS, payload: res.data} )})
        .catch((err)=> Promise.reject(err));
    }

        // fetch('/api/products',
        //     {
        //         method: "GET",
        //         headers: {"Content-Type": "application/json"}
        //     }
        // )
        // .then( res=> res.json())
        // .then( res=> dispatch({type: SET_PRODUCTS, payload: res.data}))
        // .catch(err=> Promise.reject(err));
    // }
}

export default changeProducts;