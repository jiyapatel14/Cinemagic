import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../Pages/Welcome';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin } from '@react-native-community/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  
    GoogleSignin.configure({
      webClientId: '323884164961-ciarg3acahp1tls21nlkam13h3l1ul3n.apps.googleusercontent.com',
    });
  
  }, []);

  if (isFirstLaunch === null) {
    return null; 
  } else if (isFirstLaunch == true) {
    routeName = 'Welcome';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName='Welcome'> 
     <Stack.Screen name='Welcome' component={Welcome} 
     options={{
      headerShown: false,
     }}
     />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;