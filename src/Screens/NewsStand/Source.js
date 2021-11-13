import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import moment from 'moment';

import COLORS from '../../Helper/Colors';
import {FONT_SIZE_SMALL, FONT_SIZE_LARGE} from '../../Helper/FontSize';
import {Height, Width} from '../../Helper/Dimensions';

const Source = props => {
  const newsstand = props.route.params;
  // console.log('NewsStandPropsssssssssssss', props.navigation);
  const [newsStandData, setnewsStandData] = useState('');

  useEffect(() => {
    if (newsStandData) {
      return null;
    }
    fetch(`https://saurav.tech/NewsAPI/everything/${newsstand}.json`)
      .then(response => response.json())

      .then(response => {
        // console.log('NewsStand', response.articles);

        setnewsStandData(response.articles);
      })
      .catch(err => {
        console.error(err);
      });
  });

  const renderSourceData = item => {
    const source = item.item;
    const date = moment(source.publishedAt).startOf('hour').fromNow();

    // console.log(source);
    return (
      <View>
        {/* <Text style={{color: 'black'}}>{source.title}</Text> */}
        <TouchableOpacity
          style={Styles.card}
          onPress={() => {
            props.navigation.navigate('Details', {item});
          }}>
          <Image source={{uri: source.urlToImage}} style={Styles.image} />
          <View style={Styles.contentView}>
            <Text style={Styles.sourceText}>{source.source.name}</Text>
            <Text numberOfLines={2} style={Styles.titleText}>
              {source.title}
            </Text>
            <Text style={Styles.dateText}>{date}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: COLORS.GREY, flex: 1}}>
      <Text style={{color: 'black', fontSize: FONT_SIZE_LARGE}}>
        {newsstand}
      </Text>
      <FlatList
        keyExtractor={item => item.id}
        data={newsStandData}
        renderItem={renderSourceData}
      />
    </View>
  );
};

export default Source;

const Styles = StyleSheet.create({
  card: {
    // flex: 1,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    margin: 8,
    borderRadius: 10,
    // width: Width,
  },
  image: {
    width: Width / 3,
    height: Height / 7,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  contentView: {
    // backgroundColor: 'red',
    // marginRight: 120,
    padding: 8,
    width: Width / 1.6,
    justifyContent: 'center',
  },
  sourceText: {
    fontSize: FONT_SIZE_SMALL,
    color: COLORS.GREY,
  },
  titleText: {
    fontSize: FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },
  dateText: {
    alignSelf: 'flex-end',
    fontSize: FONT_SIZE_SMALL,
    marginTop: 8,
    color: COLORS.GREY_VARIANT,
  },
});
