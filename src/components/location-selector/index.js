import { useState } from "react";
import { View, Button, Text, Alert } from 'react-native'
import * as Location from 'expo-location'
import { styles } from "./style";
import theme from "../../constants/theme";

const LocationSelector = props => {
    const [pickedLocation, setPickedLocation] = useState()
    
    const handleGetLocation =  async () => {
        const isLocationOk = await verifyPermissions()
        if (!isLocationOk) return

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        })

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
        props.onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
    }
    
    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            Alert.alert(
                'Insufficient permissions',
                'You need to give location permissions to use the app',
                [{ text: 'Ok'}]
            )
            return false
        }
        return true
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {pickedLocation ? <Text>{pickedLocation.lat},{pickedLocation.lng}</Text> : <Text>Waiting location</Text>}
            </View>
            <Button
                title='Take Location'
                color={theme.colors.primary}
                onPress={handleGetLocation}
            />
        </View>
    )
}

export default LocationSelector