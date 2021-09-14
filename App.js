import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import SignUp from './Pages/SingUp';
import Profile from './Pages/Profile';

const Stack = createStackNavigator();

export default function App() {
  return(
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Welcome'> 
     <Stack.Screen name='Welcome' component={Welcome} 
     options={{
      headerShown: false,
     }}
     />
     <Stack.Screen name='Login' component={Login}
      options={{
        headerShown: false,
      }}
     />
     <Stack.Screen name='SignUp' component={SignUp} 
      options={{
        headerShown: false,
      }}
     />
     <Stack.Screen name='Profile' component={Profile}
      options={{
        title: 'Profile Details:',
        headerTitleStyle: {alignSelf:'center'},
        headerLeft: null, 
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#fff',
      }}
     />
     </Stack.Navigator>
   </NavigationContainer>

  )
}
