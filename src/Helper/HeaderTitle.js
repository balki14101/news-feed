import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import header from '../Assets/logoBold.jpg';
import {Height, Width} from './Dimensions';

import {useNavigation} from '@react-navigation/native';

import Source from 'react-native-vector-icons/MaterialIcons';

const HeaderTitle = () => {
  const Navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingLeft:32
      }}>
      <Image
        source={header}
        style={{
          resizeMode: 'contain',
          height: Height / 16,
          width: Width / 4,
          //   backgroundColor: 'red',
        }}
      />
    </View>
  );
};

export const HeaderLeft = () => {
  const Navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => Navigation.navigate('NewsStandStackScreens')}>
      <Source name="source" color="red" size={24} style={{marginLeft: 10}} />
    </TouchableOpacity>
  );
};

export default HeaderTitle;
