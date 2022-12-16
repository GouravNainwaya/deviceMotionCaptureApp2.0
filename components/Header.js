import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EvilIcons ,Entypo} from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',height: 40}}>
    <EvilIcons name="navicon" size={24} color="white" />
      <Text style={{width: "50%"}}/>
    <Entypo name="share" size={24} color="white" />
      <Text style={{color: 'white', fontSize: 15,fontWeight: '500'}}>NO ADS</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})