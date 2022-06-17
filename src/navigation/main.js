import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, ProductDetailsScreen, ProductsScreen } from '../screens/index'

const Stack = createNativeStackNavigator()

const MainNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="ProductsDetails" component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator