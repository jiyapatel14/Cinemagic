import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Profile from "./Profile";
import Favourite from './Favourite';
import Movies from './Movies';
import Search from './Search';
import { NavigationContainer } from '@react-navigation/native';
import TopTab from './TopTab';

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
  return(
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={TopTab}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#1B1212',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={Search}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#301934',
        tabBarIcon: ({color}) => (
          <Icon name="ios-search" color={color} size={26} />
        ),
      }}
    />
      <Tab.Screen
      name="Favourite"
      component={Favourite}
      options={{
        tabBarLabel: 'Favourites',
        tabBarColor: '#2f0909',
        tabBarIcon: ({color}) => (
          <Icon name="ios-heart" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#28282B',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}

// export default function MainTab() {
//   return (
//   <NavigationContainer>
//   <BottomTab/>
//   </NavigationContainer>
//   )
// }