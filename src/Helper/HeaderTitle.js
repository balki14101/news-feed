import React from 'react';
import {View, Image} from 'react-native';

import header from '../Assets/Screenshot_2021-11-10-18-35-48-88_fe2f7fe820f7a6daf87f0ccb150c0757.jpg';
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
          width: Width / 2,
          //   backgroundColor: 'red',
        }}
      />
    </View>
  );
};

export default HeaderTitle;