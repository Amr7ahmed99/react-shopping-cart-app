import { SET_PRODUCTS, FILTER_SORT, SET_CATEGORY } from "./actionNames";
import axiosInstance from '../components/Global/axiosConfig/axiosConfig';
export  function changeProducts(category){
    return (dispatch)=>{
        axiosInstance
        .get(`${category}`)
        .then( (res)=> { dispatch( {type: SET_PRODUCTS, payload: res.data} )})
        .catch((err)=> Promise.reject(err));
    }

    // return async (dispatch)=>
    // {
    //     await fetch('/api/products'
    //     ,{
    //             method: "GET",
    //             headers: {"Content-Type": "application/json"}
    //         }
    //     )
    //     .then( res=> res.json())
    //     .then( res=> dispatch({type: SET_PRODUCTS, payload: res.data}))
    //     .catch(err=> Promise.reject(err));
    // }

        
    
}


export function changeProducts_SortByRate(products, value){
//    return (dispatch) => {
//     const newSort= [...products];
//     newSort.sort(
//         (a,b)=> ev.target.value === "Low"? (a.rating.rate - b.rating.rate): (b.rating.rate - a.rating.rate)
//         );
//     dispatch({
//         type: FILTER_SORT,
//         payload: {
//             rate: ev.target.value,
//             products: newSort
//         }
//        })

      
//    }
    const newSort= [...products];
    newSort.sort(
        (a,b)=> value === "Low"? (a.rating.rate - b.rating.rate): (b.rating.rate - a.rating.rate)
        );
        return {type: SET_PRODUCTS, payload: newSort}
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

export function changeCategory(value){
    return{
        type: SET_CATEGORY,
        payload: value
    }
}