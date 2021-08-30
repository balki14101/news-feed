import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/Screens/Home';
import Details from './src/Screens/Details';

const stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Details" component={Details} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
