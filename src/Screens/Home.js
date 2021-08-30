import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import axios from 'axios';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//import dimensions
import {Height, Width} from './Helper/Dimension';

//import Screens
import General from './Categories/General';
import Science from './Categories/Science';
import Sports from './Categories/Sports';

const Tab = createMaterialTopTabNavigator();

const card = [
  {name: 'first', details: 'this is the first card'},
  {name: 'second', details: 'this is the second card'},
  {name: 'third', details: 'this is the third card'},
];

const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Trending"
        children={() => <General data={'general'} />}
      />
      <Tab.Screen
        name="Science"
        children={() => {
          return <Science data={'science'} />;
        }}
      />
      <Tab.Screen
        name="Sports"
        children={() => {
          return <Sports data={'sports'} />;
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
export default App;
