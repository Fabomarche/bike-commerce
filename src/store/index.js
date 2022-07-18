import { createStore, combineReducers, applyMiddleware } from 'redux'
import categoryReducer from './reducers/category.reducer'
import productsReducer from './reducers/product.reducer'
import placeReducer from './reducers/place.reducer'
import AuthReducer from './reducers/auth.reducer'
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
    place: placeReducer,
    auth: AuthReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))