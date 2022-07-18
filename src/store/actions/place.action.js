import * as FileSystem from 'expo-file-system'
import { placeTypes } from '../types/place.types'


const { ADD_PLACE } = placeTypes

export const addplace = (title, image) => {
    return async dispatch => {

        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try{
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        }catch(err){
            console.log(err)
            throw err
        }
        dispatch({ type: ADD_PLACE, payload: {title, image: Path}})
    }
}