import { Platform } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CartScreen, MapScreen, NewPlaceScreen } from "../screens/index"
import theme from "../constants/theme"

const Stack = createNativeStackNavigator()

const isIOS = Platform.OS === "ios"

const CartNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? theme.colors.secondary : theme.colors.primary
                },
                headerTintColor: isIOS ? theme.colors.black : theme.colors.white,
                headerTitleStyle: {
                    fontFamily: "Lato-Bold",
                    color: theme.colors.texSecondaryColor,
                    fontSize: theme.fontSize.xxxl
                }
            }}
        >
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown:true
                }}
            />

            <Stack.Screen
                name="NewPlace"
                component={NewPlaceScreen}
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{
                    headerShown:true
                }}
            />
        </Stack.Navigator>    
    )
}

export default CartNavigator