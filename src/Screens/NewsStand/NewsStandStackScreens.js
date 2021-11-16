import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NewsStandList from './List';
import NewsStandSource from './Source';

import Settings from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../Helper/Colors';

const stack = createStackNavigator();
const NewsStandStackScreens = props => {
  console.log(props);
  // const Navigation = useNavigation();

  return (
    <stack.Navigator>
      <stack.Screen
        name="NewsStandList"
        component={NewsStandList}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: colors.WHITE,
          headerStyle: {backgroundColor: '#282A36'},
        }}
      />
      <stack.Screen
        name="NewsStandSource"
        component={NewsStandSource}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
};

export default NewsStandStackScreens;
