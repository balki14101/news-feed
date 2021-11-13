import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {useNavigation} from '@react-navigation/native';

import HeaderTitle, {HeaderLeft} from './src/Helper/HeaderTitle';
import SplashScreen from './src/Screens/SplashScreen';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';
import SourceView from './src/Screens/SourceView';
import NewsStandStackScreens from './src/Screens/NewsStand/NewsStandStackScreens';

import Settings from 'react-native-vector-icons/SimpleLineIcons';

const stack = createStackNavigator();
const App = props => {
  console.log(props);
  // const Navigation = useNavigation();

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

            headerLeft: () => <HeaderLeft />,
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
        <stack.Screen
          name="NewsStandStackScreens"
          component={NewsStandStackScreens}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
