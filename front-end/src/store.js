import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer } from './reducers/productReducers'
import { cartReducers } from './reducers/cartReducers'
import { userReducer, userRegisterReducer,userDetailsReducer, userUpdateProfileReducer } from './reducers/userreducers'

const reducer=combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducers,
    userLogin:userReducer,
    userRegister:userRegisterReducer, 
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
})
const getItemFromLocalStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const getUserInfoFromLocalStorage=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const ShippingAddressFromLocalStorage=localStorage.getItem('shippingAddress') ? JSON.parse('shippingAddress') : {}
const initialState={
    cart:{cartItems:getItemFromLocalStorage,shippingAddress:ShippingAddressFromLocalStorage},
    userLogin:{userInfo:getUserInfoFromLocalStorage},
}

const middleware=[thunk]

const store = createStore(
    reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
     )
export default store 