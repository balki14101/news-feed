import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Import Dimensions
import {Height, Width} from '../../Helper/Dimensions';

const Science = props => {
  const category = props.data;
  const Navigation = useNavigation();

  const [data, setdata] = useState('');

  useEffect(() => {
    if (data) {
      return null;
    }
    fetch(
      `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`,
    )
      .then(response => response.json())

      .then(response => {
        setdata(response.articles);
      })
      .catch(err => {
        console.error(err);
      });
  });

  const renderScienceData = item => {
    const card = item.item;
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#ffffff',
          flexDirection: 'row',
          margin: 8,
          borderRadius: 10,
        }}
        onPress={() => {
          Navigation.navigate('Details', {item});
        }}>
        <Image
          source={{uri: card.urlToImage}}
          style={{width: Width / 3, height: Height / 6, borderRadius: 8}}
        />
        <View>
          <View style={{backgroundColor: 'red'}}>
            <Text numberOfLines={2}>{card.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={data}
      renderItem={renderScienceData}
    />
  );
};

export default Science;
