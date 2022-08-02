import { Platform } from "react-native"
import { CartScreen } from "../screens/index"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
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
        </Stack.Navigator>    
    )
}

export default CartNavigator