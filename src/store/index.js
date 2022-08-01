import { createStore, combineReducers, applyMiddleware } from 'redux'
import categoryReducer from './reducers/category.reducer'
import productsReducer from './reducers/product.reducer'
import cartReducer from './reducers/cart.reducer'
import orderReducer from './reducers/order.reducer'
import placeReducer from './reducers/place.reducer'
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    place: placeReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))