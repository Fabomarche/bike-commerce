import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import IonicIcons from "@expo/vector-icons/Ionicons"
import MainNavigator from "./main";
import CartNavigator from "./cart";
import theme from "../constants/theme";

const BottomTabs = createBottomTabNavigator()
const LabelBottomTab = (focused, label) => (
    <Text
        style={{
            color: focused ?  theme.colors.primary : theme.colors.secondary,
            fontFamily: focused ? 'Lato-Bold' : 'Lato-Italic',
        }}
    >
        {label}
    </Text>
)

const TabNavigator = () => {
    return(
        <BottomTabs.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.secondary,
                tabBarStyle: {
                    backgroundColor: 'rgba(34,36,40,1)',
                },
            }}
            
        >
            <BottomTabs.Screen
                name='HomeTab'
                component={MainNavigator}
                options={{
                    tabBarLabel: ({ focused }) => LabelBottomTab( focused, "Home" ),
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons
                            name={ focused ? 'home' : 'home-outline'}
                            size={20}
                            color={focused ? theme.colors.primary : theme.colors.secondary}
                        />
                    )
                }}
                />
            <BottomTabs.Screen
                name='CartTab'
                component={CartNavigator}
                options={{
                    tabBarLabel: ({ focused }) => LabelBottomTab( focused, "Cart" ),
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons
                            name={ focused ? 'cart' : 'cart-outline'}
                            size={20}
                            color={focused ? theme.colors.primary : theme.colors.secondary}
                        />
                    )
                }}
                />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator