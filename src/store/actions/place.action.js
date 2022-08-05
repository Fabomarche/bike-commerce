import * as FileSystem from 'expo-file-system'
import { placeTypes } from '../types/place.types'
import { API_KEY_MAPS } from '../../utils/maps'


const { ADD_PLACE } = placeTypes

export const addplace = (title, image, location) => {
    return async dispatch => {
        const response = await fetch`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY_MAPS}`

        if(!response.ok) throw new Error("Coudn't comunicate with Google Maps API")

        const resData = await response.json()
        if(!resData.results) throw new Error("No data found for selected coordinates")

        const address = resData.results[0].formatted_address
        console.log(address)

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

        const result = await insertAddress(
            title,
            Path,
            address,
            location.lat,
            location.lng
        )
        console.log(result)

        dispatch({ type: ADD_PLACE, payload: {
            title,
            image: Path,
            address,
            lat: location.lat,
            lng: location.lng
        } })
    }
}