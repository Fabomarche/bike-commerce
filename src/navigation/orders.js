import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen } from "../screens/index";
import theme from "../constants/theme";

const Stack = createNativeStackNavigator()

const isIOS = Platform.OS === "ios"

const OrdersNavigator = ()=>{
    return(
        <Stack.Navigator 
            initialRouteName="Orders" 
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? theme.colors.secondary : theme.colors.primary,
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
                name="Orders" 
                component={OrdersScreen} 
                options={{
                }}
            />
            
        </Stack.Navigator>
    )
}

export default OrdersNavigator