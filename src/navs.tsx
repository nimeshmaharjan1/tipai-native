import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';

import MainScreen from '@/screens/main';
import Sidebar from './components/sidebar';

export type HomeDrawerParamsList = {
  Main: {};
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamsList>;
  Detail: {
    noteId: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<HomeDrawerParamsList>();

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 200,
      }}
      drawerContent={props => <Sidebar {...props}></Sidebar>}
    >
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

const Navigations = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigations;
