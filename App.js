import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderTitle from './src/Helper/HeaderTitle';
import SplashScreen from './src/Screens/SplashScreen';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';
import SourceView from './src/Screens/SourceView';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Settings from 'react-native-vector-icons/SimpleLineIcons';

const stack = createStackNavigator();
const App = props => {
  console.log(props);
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <HeaderTitle />,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
            },

            headerLeft: () => (
              <TouchableOpacity onPress={() => alert('This is a button!')}>
                <Settings
                  name="settings"
                  color="red"
                  size={24}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="SourceView"
          component={SourceView}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
