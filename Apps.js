// src/Apps.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import GameFeed from './screens/GameFeed';
import GameDetail from './screens/GameDetail';
import GameDashboard from './screens/GameDashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GameFeed" component={GameFeed} />
        <Stack.Screen name="GameDetail" component={GameDetail} />
        <Stack.Screen name="GameDashboard" component={GameDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
