import { placeTypes } from '../types/place.types'
import Place from '../../models/Place'

const { ADD_PLACE } = placeTypes

const initialState = {
    places: []
}

const placeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            const newPlace = new Place(date.now(), action.payload.title)
            return{
                ...state,
                places: state.places.concat(newPlace)
            }
        default:
            return state
    }
}

export default placeReducer