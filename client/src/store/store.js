import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// import productReducer from './reducer';
import combineReducer from './combineReducer';
import thunk from 'redux-thunk';
const store= createStore(combineReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;