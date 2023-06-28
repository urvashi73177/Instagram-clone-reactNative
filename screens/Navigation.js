import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";
import { NavigationContainer } from "@react-navigation/native";
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

export const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const SignedOutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="LoginScreen" component={LogInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
