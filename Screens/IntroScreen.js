import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Btn from '../components/btn';
import BottomBtn from '../components/BottomBtn';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const IntroScreen = ({navigation}) => {
    // const navigation = useNavigation()

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 1,backgroundColor: 'darkgray',}}>
      <Header/>
      <View style={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1
    }}>
    <Text style={{fontSize: 50,color: 'white',fontStyle: 'italic',fontWeight: '600',}}>   CATCH {'\n'} PHRASES</Text>
        <Btn text={"PLAY"} icon={false} onPress={() => navigation.navigate('InitialTimer')}/>
        <Btn text={"DECKS"} icon={false} borderRadius={500} onPress={null}/>
        <Btn text={"TEAM MODE"} icon={true} onPress={null}/>
        <Btn text={"MORE GAMES"} icon={false} onPress={null}/>
        <View style={{flexDirection: 'row',marginHorizontal: 100,position: 'relative',height: "11%",}}>
        <BottomBtn type="Feather" icon="settings"/>
        <BottomBtn type="Feather" icon="settings"/>
        <BottomBtn type="Feather" icon="settings"/>
        <BottomBtn type="Feather" icon="settings"/>
        </View>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default IntroScreen

const styles = StyleSheet.create({})