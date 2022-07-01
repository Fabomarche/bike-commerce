import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, ProductDetailScreen, ProductsScreen, CategoriesScreen } from '../screens/index'
import theme from "../constants/theme";

const Stack = createNativeStackNavigator()

const isIOS = Platform.OS === "ios"

const MainNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.title
                })}
            />
            <Stack.Screen 
                name="ProductDetails" 
                component={ProductDetailScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator