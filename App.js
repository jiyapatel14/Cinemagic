import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Providers from './navigation/Index';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import MainTab from './Pages/MainTab';
import TopTab from './Pages/TopTab';
import MovieDetails from './Pages/MovieDetails';

const Stack = createStackNavigator();

export default function App() {
  return <Providers />;
}