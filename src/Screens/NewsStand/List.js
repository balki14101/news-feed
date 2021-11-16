import React, {useState, useEffect} from 'react';

import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';

import {BBC, CNN, GOOGLE, FOX} from '../../Helper/Constants';
import {Height, Width} from '../../Helper/Dimensions';

const List = () => {
  const [data, setdata] = useState('');
  const list = [
    {
      title: 'BBC News',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1024px-BBC_News_2019.svg.png',
      bgColor: '#5ED1C9',

      prop: 'bbc-news',
    },
    {
      title: 'CNN',
      image:
        'https://www.district158.org/wp-content/uploads/2018/01/cnn-logo.png',
      bgColor: '#1CD1A1',
      prop: 'cnn',
    },
    {
      title: 'FOX News',
      image:
        'https://michellegielan.com/wp-content/uploads/2016/09/fox-news-logo.jpg',
      bgColor: '#FF6B6B',

      prop: 'fox-news',
    },
    {
      title: 'Google News',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_News_icon.svg/1200px-Google_News_icon.svg.png',
      bgColor: '#54C5F7',

      prop: 'google-news',
    },
  ];

  const Navigation = useNavigation();

  return (
    <View
      style={{backgroundColor: '#202124', flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          marginVertical: 8,
        }}>
        {list.map(item => {
          return (
            <TouchableOpacity
              onPress={() => Navigation.navigate('NewsStandSource', item)}
              style={{
                backgroundColor: item.bgColor,
                marginVertical: 4,
                width: Width / 2.2,
                height: Height / 4.6,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                marginBottom: 8,
              }}>
              <Image
                source={{uri: item.image}}
                style={{height: Height / 8, width: Width / 3}}
              />
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default List;
