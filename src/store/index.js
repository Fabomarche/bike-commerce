import { createStore, combineReducers } from 'redux'
import categoryReducer from './reducers/category.reducer'
import productsReducer from './reducers/product.reducer'
import placeReducer from './reducers/place.reducer'

const RootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
    place: placeReducer,
})

export default createStore(RootReducer)