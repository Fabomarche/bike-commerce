import { useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import IonicIcons from '@expo/vector-icons/Ionicons'
import { styles } from './styles'

const MapScreen = ({ navigation }) => {
    const [selectedLocation, setSelectedLocation] = useState()
    const initialRegion = {
        latitude: 37.4219023,
        longitude: -122.0839984,
        latitudeDelta:0.0922,
        longitudeDelta: 0.0421,
    }
    const handleSaveLocation = () => {
        if (selectedLocation) {
            navigation.navigate("NewPlace", { mapLocation: selectedLocation })
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                <TouchableOpacity onPress={handleSaveLocation}>
                    <IonicIcons name="md-save-outline" color="white" size={22}/>
                </TouchableOpacity>
            }
        })
    },[navigation, handleSaveLocation])

    const handleSelectLocation = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
        })
    }

    return(
        <MapView initialRegion={initialRegion} style={styles.map} onPress={handleSelectLocation}>
            {selectedLocation && (
                <Marker
                    title="Selected ubication"
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lng,
                    }}
                />
            )}
        </MapView>
    )
}

export default MapScreen