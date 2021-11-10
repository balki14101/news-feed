import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/FontAwesome';

const SplashScreen = () => {
  const Navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      Navigation.navigate('Home');
    }, 1000);
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <Text style={{fontSize: 60}}>{'News'}</Text>
        <MaterialIcons
          name="circle"
          color="red"
          size={20}
          style={{paddingBottom: 12}}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
