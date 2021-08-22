import React from 'react'
import { View, Text, Image } from 'react-native'

//import dimensions
import { Height,Width } from './Helper/Dimension'

const App = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={{ uri: 'http://tarvostar.com/wp-content/uploads/2020/09/comming.png' }}
        style={{ height: Height/3, width:Width/2,resizeMode:'contain'}}
        />
    </View>
  )
}

export default App
