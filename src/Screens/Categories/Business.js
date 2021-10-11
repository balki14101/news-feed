import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

//Import Categories Styles
import Styles from './Styles';

const Business = props => {
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

  const renderBusinessData = item => {
    const card = item.item;
    const date = moment(card.publishedAt).startOf('hour').fromNow();
    // .format('Do MMM YY');
    return (
      <TouchableOpacity
        style={Styles.card}
        onPress={() => {
          Navigation.navigate('Details', {item});
        }}>
        <Image source={{uri: card.urlToImage}} style={Styles.image} />
        <View style={Styles.contentView}>
          <Text style={Styles.sourceText}>{card.source.name}</Text>
          <Text numberOfLines={2} style={Styles.titleText}>
            {card.title}
          </Text>
          <Text style={Styles.dateText}>{date}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={data}
      renderItem={renderBusinessData}
    />
  );
};

export default Business;
