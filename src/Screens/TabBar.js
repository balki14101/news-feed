import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

import LinearGradient from 'react-native-linear-gradient';
//Import Categories Styles
// import Styles from './Categories/Styles';

import MaterialIcons from 'react-native-vector-icons/FontAwesome';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//Import Dimensions
import {Height, Width} from '../Helper/Dimensions';
import COLORS from '../Helper/Colors';
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_NORMAL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LARGE,
  FONT_SIZE_EXTRA_LARGE,
} from '../Helper/FontSize';

//import Screens
import General from './Categories/General';
import Science from './Categories/Science';
import Sports from './Categories/Sports';
import Health from './Categories/Health';
import Entertainment from './Categories/Entertainment';
import Technology from './Categories/Technology';
import Business from './Categories/Business';

const Tab = createMaterialTopTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarLabelStyle: {
          fontSize: FONT_SIZE_SMALL,
          fontWeight: 'bold',
        },
        tabBarItemStyle: {
          height: 40,
          width: 124,
          flexDirection: 'row',
        },
        tabBarIndicatorStyle: {backgroundColor: '#00000000'},
        tabBarScrollEnabled: true,
        // tabBarLabel: navigation.isFocused() ? route.name : '',
        tabBarIcon: ({focused, size, color}) => {
          return (
            <MaterialIcons
              name="circle"
              color={focused ? 'red' : 'black'}
              size={10}
              style={{
                position: 'absolute',
                right: 0,
                top: 8,
              }}
            />
          );
        },
      })}>
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

export default TabBar;
