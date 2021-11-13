import React, {useState, useEffect} from 'react';

import {View, Text, FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {BBC, CNN, GOOGLE, FOX} from '../../Helper/Constants';

const List = () => {
  const [data, setdata] = useState('');

  const Navigation = useNavigation();

  useEffect(() => {
    if (data) {
      return null;
    }
    fetch(`https://saurav.tech/NewsAPI/sources.json`)
      .then(response => response.json())

      .then(response => {
        console.log('sourceItemsssssssssssss', response.sources);

        setdata(response.sources);
      })
      .catch(err => {
        console.error(err);
      });
  });

  const renderSourceData = item => {
    const source = item.item;
    console.log(source);
    return (
      <View>
        <Text style={{color: 'black'}}>{source.name}</Text>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text
        style={{color: 'black'}}
        onPress={() => {
          Navigation.navigate('NewsStandSource', 'bbc-news');
        }}>
        {'BBC News'}
      </Text>
      <Text
        style={{color: 'black'}}
        onPress={() => {
          Navigation.navigate('NewsStandSource', 'cnn');
        }}>
        {'CNN'}
      </Text>
      <Text
        style={{color: 'black'}}
        onPress={() => {
          Navigation.navigate('NewsStandSource', 'fox-news');
        }}>
        {'Fox News'}
      </Text>
      <Text
        style={{color: 'black'}}
        onPress={() => {
          Navigation.navigate('NewsStandSource', 'google-news');
        }}>
        {'Google News'}
      </Text>
    </View>
  );
};

export default List;
