import { SignUpScreen, LoginScreen, MyFlightsScreen } from './src/screens';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TitleComponent } from './src/components';
import { userHandler } from './src/hooks/useUser';

const Stack = createNativeStackNavigator();

export default function App() {

  const currentUser = userHandler();
  console.warn(currentUser);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpScreen">
        { !currentUser? <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerTitle: () => <TitleComponent title="Sign Up" />,
          }}
        /> :  <Stack.Screen
        name="MyFlightsScreen"
        component={MyFlightsScreen}
        options={{
          headerTitle: () => <TitleComponent title="My flights" />,
          headerBackVisible: false,
        }}
      />}
        
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTitle: () => <TitleComponent title="Log In" />,
            headerBackVisible: false,
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
