import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { Timer } from "react-native-stopwatch-timer";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const InitialTimer = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  const [startTimer, setStartTimer] = useState(true);
  const [totalDuration, setTotalDuration] = useState(4000);
  const [getTime, setGetTime] = useState();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('HomeScreen')
  //   }, 4000);
  // }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3e2772",
      }}
    >
      <Text
        style={{
          position: "absolute",
          top: 15,
          fontSize: 25,
          color: "white",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Get Ready
      </Text>
      {/* <Timer totalDuration={totalDuration} start={startTimer} options={options} getTime={(time) => setGetTime(time.slice(7))} handleFinish={() => {}}/>
      <Text style={{fontSize: width / 2.90,color: 'white',fontWeight: '700'}}>{getTime}</Text> */}
      <CountdownCircleTimer
        isPlaying
        duration={4}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => navigation.navigate('HomeScreen')
      }
      >
        {({ remainingTime }) => <Text style={{color: 'white',fontSize:16}}>{remainingTime}</Text>}
      </CountdownCircleTimer>
      <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>
        Are You Ready?
      </Text>
    </View>
  );
};

export default memo(InitialTimer);

const options = {
  container: {
    backgroundColor: "#3e2772",
    alignItems: "center",
  },
  text: {
    fontSize: 0,
    color: "#3e2772",
  },
};

const styles = StyleSheet.create({});
