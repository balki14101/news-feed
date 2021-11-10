import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Height, Width} from '../Helper/Dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Details(props) {
  console.log(props);
  const [favorite, setfavorite] = useState(false);
  const [bookmark, setbookmark] = useState(false);

  const detailsData = props.route.params.item.item;
  return (
    <View>
      <Image
        source={{uri: detailsData.urlToImage}}
        style={{width: Width, height: Height / 3}}
      />
      <View style={{padding: 16}}>
        <View
          style={{borderLeftColor: 'red', borderLeftWidth: 3, paddingLeft: 8}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {detailsData.title}
          </Text>
        </View>
        <View style={{marginTop: 8}}>
          <Text>{detailsData.content}</Text>
        </View>
        <View style={{marginTop: 8}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('SourceView', detailsData.url);
            }}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {'Click Hear to Continue Reading'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Icon
        name="arrow-back"
        size={24}
        color="#000000"
        style={{position: 'absolute', left: 8, top: 8}}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Icon
        name={favorite ? 'favorite' : 'favorite-outline'}
        size={24}
        color={favorite ? 'red' : 'black'}
        style={{position: 'absolute', right: 8, top: 8}}
        onPress={() => {
          setfavorite(!favorite);
        }}
      />
      <Icon
        name={bookmark ? 'bookmark' : 'bookmark-outline'}
        size={24}
        color="black"
        style={{position: 'absolute', right: 40, top: 8}}
        onPress={() => {
          setbookmark(!bookmark);
        }}
      />
    </View>
  );
}

export default Details;
