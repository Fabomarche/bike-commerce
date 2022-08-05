import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserScreen } from '../screens/index';
import theme from "../constants/theme";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const UserNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="User"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? theme.colors.secondary : theme.colors.primary,
                },
                headerTintColor: isIOS ? theme.colors.black : theme.colors.white,
                headerTitleStyle: {
                    fontFamily: "Lato-Bold",
                },
            }}
        >
            <Stack.Screen
                name="User"
                component={UserScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default UserNavigator;