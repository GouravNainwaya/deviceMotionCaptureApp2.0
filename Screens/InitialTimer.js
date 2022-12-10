import { StyleSheet, Text, View,useWindowDimensions ,} from 'react-native'
import React,{useState} from 'react'
import { Timer } from 'react-native-stopwatch-timer';
// import { CountDown } from 'react-native-countdown-component';



const InitialTimer = () => {
  const {height,width} = useWindowDimensions()
  
  const [startTimer, setStartTimer] = useState(true)
  const [totalDuration, setTotalDuration] = useState(4000)
  const [getTime, setGetTime] = useState()
  
  return (
    <View style={{flex: 1,justifyContent:'center',alignItems:'center',backgroundColor: '#3e2772'}}>
      <Text style={{position: 'absolute', top: 15,fontSize: 25,color: 'white',fontWeight: '500',textAlign: 'center'}}>Get Ready</Text>
      <Timer totalDuration={totalDuration} start={startTimer} options={options} getTime={(time) => setGetTime(time.slice(7))} handleFinish={() => {}}/>
      {/* <CountDown
        size={30}
        until={1000}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#1CC625'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      /> */}
      <Text style={{fontSize: width / 2.90,color: 'white',fontWeight: '700'}}>{getTime}</Text>
    </View>
  )
}

export default InitialTimer

const options = {
  container:{
    backgroundColor: '#3e2772',
    alignItems: 'center',
  },
  text:{
    fontSize: 0,
    color: '#3e2772',
  }
}

const styles = StyleSheet.create({
})