import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Upcoming from './Upcoming';
import Trending from './Trending';
import getMovies from './Latest';

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
         initialRouteName="Upcoming"
         screenOptions={{
             activeTintColor: "#000000",
             labelStyle: { fontSize: 12 },
             style: { backgroundColor: "#800000", marginTop: insets.top },
         }}
        >
         <Tab.Screen 
          name="Upcoming"
          component={Upcoming}
          options={{ tabBarLabel: "Upcoming" }}
         />
         <Tab.Screen 
          name="Trending"
          component={Trending}
          options={{ tabBarLabel: "Trending" }}
         />
         <Tab.Screen 
          name="Latest"
          component={getMovies}
          options={{ tabBarLabel: "Latest" }}
         />
        </Tab.Navigator>
    );
}

// export default function TopTab() {
//     return  <MyTabs />
// }
