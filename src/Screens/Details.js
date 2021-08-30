import React from 'react';
import {View, Text, Image} from 'react-native';
import {Height, Width} from '../Helper/Dimensions';

const Details = props => {
  const detailsData = props.route.params.item.item;
  return (
    <View>
      <Image
        source={{uri: detailsData.urlToImage}}
        style={{width: Width, height: Height / 3}}
      />
      <Text>{detailsData.title}</Text>
    </View>
  );
};

export default Details;
