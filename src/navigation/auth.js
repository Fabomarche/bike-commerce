<<<<<<< HEAD
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthScreen } from "../screens";
import theme from "../constants/theme";

const Stack = createNativeStackNavigator()

const isIOS = Platform.OS === "ios"

const AuthNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Auth" 
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? theme.colors.secondary : theme.colors.primary,
                },
                headerTintColor: isIOS ? theme.colors.black : theme.colors.white,
                headerTitleStyle: {
                    fontFamily: "Lato-Bold",
                }
            }}
        >
            <Stack.Screen 
                name="Auth" 
                component={AuthScreen} 
                options={{
                    headerShown: false,
                }}
            />
            
        </Stack.Navigator>
    )
}
export default AuthNavigator
=======
import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "../screens/index";
import theme from "../constants/theme";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
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
        name="Auth"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
>>>>>>> develop
