import React from 'react';
import {View, Image} from 'react-native';

import header from '../Assets/logoBold.jpg';
import {Height, Width} from './Dimensions';

const HeaderTitle = () => {
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

export default HeaderTitle;
