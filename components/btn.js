import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{memo} from 'react'
import { Entypo } from '@expo/vector-icons';

const Btn = ({text,icon,onPress}) => {
  console.log("🚀 ~ file: btn.js:6 ~ Btn ~ icon", icon)
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor: '#2b575e',justifyContent: 'center',flexDirection: 'row',alignItems: 'center',width: "75%",height:"10%",borderRadius: 25,marginBottom: "-12%",}}>
    <View style={{flexDirection: 'row',justifyContent: icon ? 'space-between' : null,flex: icon ? 1 : null}}>
    {icon ? ( 
    <Text style={{color: 'white', fontSize: 18,fontWeight: 'bold',marginLeft: "10%"}}/>) : null }
    <Text style={{color: 'white', fontSize: 18,fontWeight: 'bold'}}>{text}</Text>
    {icon ? <Entypo name="lock" size={24} color="white" style={{marginRight: "5%"}}/> : null}
    </View>
    </TouchableOpacity>
  )
}

export default memo(Btn)

const styles = StyleSheet.create({})