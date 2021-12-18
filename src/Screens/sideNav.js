import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import FAQ from './FAQ';
import React from 'react';
import HomeScreen from './HomeScreen';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

const MyDrawer=()=> {
  return (
    <Drawer.Navigator initialRouteName={HomeScreen}>
      <Drawer.Screen name="Feed" component={FAQ} />
    </Drawer.Navigator>
  );
}


export default MyDrawer;