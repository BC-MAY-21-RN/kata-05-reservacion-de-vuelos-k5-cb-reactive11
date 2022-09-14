import { SafeAreaView } from "react-native";
import { SignUpScreen, LoginScreen, MyFlightsScreen } from "./screens";
import { styles } from "./assets/styles/globalStyles";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TitleComponent } from "./components";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerTitle: () => <TitleComponent title="Sign Up" />, headerTitleAlign: 'left'} }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
