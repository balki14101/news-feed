import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {FONT_SIZE_SMALL} from '../Helper/FontSize';

//import Screens
import General from './Categories/General';
import Science from './Categories/Science';
import Sports from './Categories/Sports';
import Health from './Categories/Health';
import Entertainment from './Categories/Entertainment';
import Technology from './Categories/Technology';
import Business from './Categories/Business';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: FONT_SIZE_SMALL, fontWeight: 'bold'},
        tabBarItemStyle: {width: 124},
        tabBarScrollEnabled: true,
        // tabBarStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen
        name="Trending"
        children={() => <General data={'general'} />}
        // options={{title: 'Tre'}}
      />
      <Tab.Screen
        name="Science"
        children={() => {
          return <Science data={'science'} />;
        }}
        // options={{title: 'Sci'}}
      />
      <Tab.Screen
        name="Sports"
        children={() => {
          return <Sports data={'sports'} />;
        }}
        // options={{title: 'Spt'}}
      />
      <Tab.Screen
        name="Health"
        children={() => {
          return <Health data={'health'} />;
        }}
        // options={{title: 'Hea'}}
      />
      <Tab.Screen
        name="Entertainment"
        children={() => {
          return <Entertainment data={'entertainment'} />;
        }}
        // options={{title: 'Ent'}}
      />
      <Tab.Screen
        name="Technology"
        children={() => {
          return <Technology data={'technology'} />;
        }}
        // options={{title: 'Tec'}}
      />
      <Tab.Screen
        name="Business"
        children={() => {
          return <Business data={'business'} />;
        }}
        // options={{title: 'Bus'}}
      />
    </Tab.Navigator>
  );
};

export default Home;
