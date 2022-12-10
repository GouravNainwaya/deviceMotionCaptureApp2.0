import {
  View,
  Text,
  useWindowDimensions,
  Button,
  Modal,
  StatusBar,
} from "react-native";
import React, { memo, useCallback, useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { DeviceMotion } from "expo-sensors";
import { useDispatch, useSelector } from "react-redux";
import { setCounter, setResetTimer, setTimeDuration } from "../redux/MySlice";
import CountDown from "react-native-countdown-component";

export const CorrectSceen = () => {
  const dispatch = useDispatch();
  const ResetTimer = useSelector((state) => state.MySlice.ResetTimer);

  const [CorrectTimeout, setCorrectTimeout] = useState(false);
  console.log("CorrectSceen call");
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(setCounter());
    dispatch(setTimeDuration());
  }, []);

  setTimeout(() => {
    setCorrectTimeout(true);
    CorrectTimeout ? navigation.navigate("HomeScreen") : null;
  }, 1000);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8ea7d4",
      }}
    >
      <Animatable.Text
        animation="fadeIn"
        duration={1000}
        iterationCount={Infinity}
        style={{ fontSize: 100, color: "white" }}
      >
        Correct
      </Animatable.Text>
    </View>
  );
};

export const PassedSceen = () => {
  const ResetTimer = useSelector((state) => state.MySlice.ResetTimer);

  const dispatch = useDispatch();
  console.log("PassedSceen call");
  const navigation = useNavigation();
  const [CorrectTimeout, setCorrectTimeout] = useState(false);

  useEffect(() => {
    dispatch(setCounter());
    dispatch(setTimeDuration());
  }, []);

  setTimeout(() => {
    StatusBar.setHidden(true, "fade");
    setCorrectTimeout(true);
    CorrectTimeout ? navigation.navigate("HomeScreen") : null;
  }, 1000);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a3333a",
      }}
    >
      <Animatable.Text
        animation="fadeIn"
        duration={2000}
        iterationCount={Infinity}
        style={{ fontSize: 100, color: "white" }}
      >
        Pass
      </Animatable.Text>
    </View>
  );
};

export const TimeOutScreen = () => {
  console.log("TimeOutScreen call");

  useEffect(() => {
    console.log("1st _unsubscribe start");
    DeviceMotion.removeAllListeners();
    console.log("1st _unsubscribe end");
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a33153",
      }}
    >
      <Animatable.Text
        animation="fadeIn"
        duration={2000}
        iterationCount={Infinity}
        style={{ fontSize: 100, color: "white" }}
      >
        TimeOut
      </Animatable.Text>
    </View>
  );
};

const HomeScreen = () => {
  // LogBox.ignoreAllLogs();

  const counter = useSelector((state) => state.MySlice.counter);
  const ResetTimer = useSelector((state) => state.MySlice.ResetTimer);
  const TimeDuration = useSelector((state) => state.MySlice.TimeDuration);
  const [checlDeviceMotion, setCheclDeviceMotion] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [data, setData] = useState({});
  console.log("useState data", data);

  let { alpha, beta, gamma } = data;

  const { height, width } = useWindowDimensions();

  const [startTimer, setStartTimer] = useState(true);
  const [timerDurations, setTotalDuration] = useState(30);
  const [getTime, setGetTime] = useState(null);

  useEffect(() => {
    console.log("1st useEffect running");
    try {
      _subscribe();
    } catch (error) {
      console.log("error", error);
    }

    return () => {
      _unsubscribe();
      console.log("1st useEffect end");
    };
  }, []);

  const _setInterval = () => {
    console.log("_setInterval running");
    DeviceMotion.setUpdateInterval(1000);
    console.log("_setInterval end");
  };

  const _subscribe = async () => {
    console.log("_subscribe running");
    DeviceMotion.addListener((devicemotionData) => {
      devicemotionData.orientation == -90 && !checlDeviceMotion
        ? setCheclDeviceMotion(true)
        : null;
      setData(devicemotionData.rotation);
      let newgammaforminus90 = Math.floor(
        devicemotionData.rotation.gamma.toString()
      );
      let newgammafor90 = Math.round(
        devicemotionData.rotation.gamma.toString()
      );
      console.log("newgamma", devicemotionData.orientation);
      console.log("newgammaforminus90", newgammaforminus90);
      console.log("newgammafor90", newgammafor90);

      if (checlDeviceMotion) {
        switch (newgammaforminus90) {
          case 2:
            console.log("I own a up newgammaforminus90");
            navigation.navigate("CorrectSceen");
            break;
          case 0:
            console.log("I own a down newgammaforminus90");
            navigation.navigate("PassedSceen");
            break;
          default:
            console.log("I don't own a screen newgammaforminus90");
            break;
        }
      } else {
        switch (newgammafor90) {
          case -2:
            console.log("I own a up newgammafor90");
            navigation.navigate("CorrectSceen");
            break;
          case 0:
            console.log("I own a down newgammafor90");
            navigation.navigate("PassedSceen");
            break;
          default:
            console.log("I don't own a screen newgammafor90");
            break;
        }
      }
    });
    console.log("_subscribe end");
    _setInterval();
  };

  const _unsubscribe = () => {
    console.log("_unsubscribe running");
    DeviceMotion.removeAllListeners();
    console.log("_unsubscribe end");
  };

  let datas = [
    "Elephant",
    "Zebra",
    "Monkey",
    "Elephant",
    "Zebra",
    "Monkey",
    "Elephant",
    "Zebra",
    "Monkey",
  ];
  console.log("counter",counter)
  let boom = datas[counter];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3e2772",
      }}
    >
      <View style={{ justifyContent: "space-between", alignItems: "center" }}>
        <CountDown
          size={25}
          until={TimeDuration}
          onFinish={() => navigation.navigate("TimeOutScreen")}
          digitStyle={{ backgroundColor: "#3e2772", alignItems: "center" }}
          digitTxtStyle={{ color: "white" }}
          timeToShow={["S"]}
          timeLabels={{ d: null, h: null, m: null, s: null }}
          // showSeparator
        />
        <Animatable.Text
          animation="fadeIn"
          duration={1000}

          style={{ fontSize: 100, color: "white" }}
        >
          {boom}
        </Animatable.Text>
        <View style={{ height: "30%" }} />
      </View>
      {/* <Button onPress={_unsubscribe} title="off" />
      <Button onPress={_subscribe} title="on" /> */}
    </View>
  );
};

export default memo(HomeScreen);

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
