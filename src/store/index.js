import { createStore, combineReducers, applyMiddleware } from 'redux'
import categoryReducer from './reducers/category.reducer'
import productsReducer from './reducers/product.reducer'
<<<<<<< HEAD
import placeReducer from './reducers/place.reducer'
import AuthReducer from './reducers/auth.reducer'
=======
import cartReducer from './reducers/cart.reducer'
import orderReducer from './reducers/order.reducer'
import authReducer from './reducers/auth.reducer';
import userReducer from './reducers/user.reducer';
>>>>>>> develop
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
<<<<<<< HEAD
    place: placeReducer,
    auth: AuthReducer,
=======
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer,
    user: userReducer,
>>>>>>> develop
})

export default createStore(RootReducer, applyMiddleware(thunk))