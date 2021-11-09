import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from '../Pages/MainTab';
import MovieDetails from '../Pages/MovieDetails';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainTab" 
        component={MainTab}
        options={{
        headerShown: false,
        }}/>
      <Stack.Screen 
        name="MovieDetails" 
        component={MovieDetails}
        options={{
        headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;