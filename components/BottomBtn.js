import { StyleSheet, Text, View,TouchableOpacity,useWindowDimensions } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

const BottomBtn = ({type,icon}) => {
    const {width,height} = useWindowDimensions('')
  return (
    <View style={{backgroundColor: '#2b575e',justifyContent: 'center',flexDirection: 'row',alignItems: 'center',width: width / 4.70,height:"100%",borderRadius: 50,marginLeft: "1%",marginTop: "17%"}}>
        <Icon name={icon} size={24} color="white" type={type}/>
    </View>
  )
}

export default BottomBtn

const styles = StyleSheet.create({})