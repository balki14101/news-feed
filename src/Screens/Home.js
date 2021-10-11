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
import Health from './Categories/Health';
import Entertainment from './Categories/Entertainment';
import Technology from './Categories/Technology';
import Business from './Categories/Business';

const Tab = createMaterialTopTabNavigator();

const card = [
  {name: 'first', details: 'this is the first card'},
  {name: 'second', details: 'this is the second card'},
  {name: 'third', details: 'this is the third card'},
];

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Trending"
        children={() => <General data={'general'} />}
        options={{title: 'Tre'}}
      />
      <Tab.Screen
        name="Science"
        children={() => {
          return <Science data={'science'} />;
        }}
        options={{title: 'Sci'}}
      />
      <Tab.Screen
        name="Sports"
        children={() => {
          return <Sports data={'sports'} />;
        }}
        options={{title: 'Spt'}}
      />
      <Tab.Screen
        name="Health"
        children={() => {
          return <Health data={'health'} />;
        }}
        options={{title: 'Hea'}}
      />
      <Tab.Screen
        name="Entertainment"
        children={() => {
          return <Entertainment data={'entertainment'} />;
        }}
        options={{title: 'Ent'}}
      />
      <Tab.Screen
        name="Technology"
        children={() => {
          return <Technology data={'technology'} />;
        }}
        options={{title: 'Tec'}}
      />
      <Tab.Screen
        name="Business"
        children={() => {
          return <Business data={'business'} />;
        }}
        options={{title: 'Bus'}}
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
export default Home;
