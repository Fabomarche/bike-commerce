import { useEffect, useState } from "react";
import { View, Button, Text, Alert } from 'react-native'
import * as Location from 'expo-location'
import { styles } from "./style";
import theme from "../../constants/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapPreview from "../map-preview";

const LocationSelector = props => {
    const navigation = useNavigation()
    const route = useRoute()
    const [pickedLocation, setPickedLocation] = useState()
    
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

    const handlerPickOnMap = async () => {
        const isLocationOk = await verifyPermissions()
        if (!isLocationOk) return
        navigation.navigate('Map')
    }

    const mapLocation = route?.params?.mapLocation

    useEffect(() => {
        if (mapLocation){
            setPickedLocation(mapLocation)
            props.onLocation(mapLocation)
        }
    },[mapLocation])

    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview} onPress={handlerPickOnMap}>
                <Text>Waiting location</Text>
            </MapPreview>
            <View style={styles.actions}>
                <Button
                    title='Take Location'
                    color={theme.colors.primary}
                    onPress={handleGetLocation}
                />
                <Button
                    title='Pick Map'
                    color={theme.colors.primary}
                    onPress={handlerPickOnMap}
                />
            </View>
        </View>
    )
}

export default LocationSelector