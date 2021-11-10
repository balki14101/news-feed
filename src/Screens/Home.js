import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

import LinearGradient from 'react-native-linear-gradient';
//Import Categories Styles
// import Styles from './Categories/Styles';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//Import Dimensions
import {Height, Width} from '../Helper/Dimensions';
import COLORS from '../Helper/Colors';
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_NORMAL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LARGE,
  FONT_SIZE_EXTRA_LARGE,
} from '../Helper/FontSize';

//import Screens
import TabBar from './TabBar';
import General from './Categories/General';
import Science from './Categories/Science';
import Sports from './Categories/Sports';
import Health from './Categories/Health';
import Entertainment from './Categories/Entertainment';
import Technology from './Categories/Technology';
import Business from './Categories/Business';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  const Navigation = useNavigation();

  const [data, setdata] = useState('');

  useEffect(() => {
    if (data) {
      return null;
    }
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`)
      .then(response => response.json())

      .then(response => {
        setdata(response.articles);
      })
      .catch(err => {
        console.error(err);
      });
  });

  const renderGeneralData = item => {
    const card = item.item;
    const date = moment(card.publishedAt).startOf('hour').fromNow();
    // .format('Do MMM YY');
    return (
      <TouchableOpacity
        style={[Styles.card, {alignItems: 'center'}]}
        // style={Styles.card}
        onPress={() => {
          Navigation.navigate('Details', {item});
        }}>
        <ImageBackground
          source={{uri: card.urlToImage}}
          style={Styles.image}
          imageStyle={{borderRadius: 8}}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <LinearGradient
              colors={['#00000000', '#000000']}
              style={{
                padding: 8,
                borderRadius: 8,
              }}>
              <Text numberOfLines={2} style={Styles.titleText}>
                {card.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 8,
                }}>
                <Text style={Styles.dateText}>{date}</Text>
                <Text style={Styles.sourceText}>{card.source.name}</Text>
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <View style={{}}>
        <Text
          style={{
            fontSize: FONT_SIZE_EXTRA_LARGE,
            fontWeight: 'bold',
            color: COLORS.BLACK,
            margin: 8,
          }}>
          {'Trending Topics'}
        </Text>

        <FlatList
          horizontal={true}
          keyExtractor={item => item.id}
          data={data}
          renderItem={renderGeneralData}
        />
      </View>
      <TabBar />
    </View>
  );
};

export default Home;

const Styles = StyleSheet.create({
  card: {
    // flex: 1,
    // backgroundColor: 'red',
    // flexDirection: 'row',
    margin: 8,
    width: Width / 1.4,
    height: Height / 4,
    // width: Width,
  },
  image: {
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
    // overflow: 'hidden',
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
    color: COLORS.WHITE,
    marginLeft: 16,
  },
  titleText: {
    fontSize: FONT_SIZE_LARGE,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  dateText: {
    // backgroundColor: 'red',
    // alignSelf: 'flex-end',
    fontSize: FONT_SIZE_SMALL,
    // marginTop: 8,
    // color: COLORS.GREY_VARIANT,
    color: COLORS.WHITE,
  },
});
