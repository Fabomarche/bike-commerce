import { products } from '../../data/products'
import { productsTypes } from '../types/product.types'

const {SELECT_PRODUCT, FILTERED_PRODUCTS} = productsTypes

const initialState = {
    products,
    filteredProducts: [],
    selected: null
}

const productsReducer = (state =  initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return{
                ...state,
                selected: state.products.find(prod => prod.id === action.productId)
            }
        case  FILTERED_PRODUCTS:
            return{
                ...state,
                filteredProducts: state.products.filter(prod => prod.categoryId === action.categoryId)
            }
        default:
                return state
    }
}

export default productsReducer