import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import SignUp from './Pages/SingUp';
import MainTab from './Pages/MainTab';
import TopTab from './Pages/TopTab';
import MovieDetails from './Pages/MovieDetails';

//import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();

export default function App() {
  return(
  // <NavigationContainer>
  //   <Stack.Navigator>
  //       <Stack.Screen name="MainTab" component={MainTab} />
  //       <Stack.Screen name="MovieDetails" component={MovieDetails} />
  //     </Stack.Navigator>
  // </NavigationContainer>
    
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
     <Stack.Screen name="MainTab" component={MainTab}
      options={{
        headerShown: false,
      }}
     />
     <Stack.Screen name="MovieDetails" component={MovieDetails} 
      options={{
        headerShown: false,
      }}
     />
     </Stack.Navigator>
   </NavigationContainer>

  )
}