import { SignUpScreen, LoginScreen, MyFlightsScreen } from "./screens";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TitleComponent } from "./components";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpScreen">
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerTitle: () => <TitleComponent title="Sign Up" />,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTitle: () => <TitleComponent title="Log In" />,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="MyFlightsScreen"
          component={MyFlightsScreen}
          options={{
            headerTitle: () => <TitleComponent title="My flights" />,
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
