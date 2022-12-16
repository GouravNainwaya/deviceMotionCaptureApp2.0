import {
  View,
  useWindowDimensions,
  StatusBar,
  LogBox,
  Button,
  Pressable
} from "react-native";
import React, { memo, useState, useEffect,useMemo} from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DeviceMotion } from "expo-sensors";
import { useDispatch, useSelector } from "react-redux";
import { setCounter,  } from "../redux/MySlice";
import CountDown from "react-native-countdown-component";
import datas from "./data";
import { Audio } from 'expo-av';

export const CorrectSceen = ({route}) => {
  const CorrectScreenSound = useSelector((state) => state.MySlice.CorrectScreenSound);
  const [sound, setSound] = useState();
  
  const subscribe = async() => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/correct-6033.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await CorrectScreenSound ? sound.playAsync() : null
  }

  useMemo(() => {
    subscribe()
  }, [CorrectScreenSound])

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const dispatch = useDispatch();

  const [CorrectTimeout, setCorrectTimeout] = useState(false);
  console.log("CorrectSceen call");
  const navigation = useNavigation();

  useEffect(() => {
    const subscribe = async() => {
      setTimeout(() => {
        dispatch(setCounter());
      }, 500)
    }
    subscribe()
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
        duration={2000}
        iterationCount={Infinity}
        style={{ fontSize: 100, color: "white" }}
      >
        Correct
      </Animatable.Text>
    </View>
  );
};

export const PassedSceen = () => {
  const PassedScreenSound = useSelector((state) => state.MySlice.PassedScreenSound);
  const [sound, setSound] = useState();
  
  const subscribe = async() => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/wrong-answer-126515.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await PassedScreenSound ? sound.playAsync() : null
  }

  useMemo(() => {
    subscribe()
  }, [PassedScreenSound])

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const dispatch = useDispatch();
  console.log("PassedSceen call");
  const navigation = useNavigation();
  const [CorrectTimeout, setCorrectTimeout] = useState(false);

  useEffect(() => {
    dispatch(setCounter());
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
  const [TimeOutSound, setTimeOutSound] = useState(true)
  const [sound, setSound] = useState();
  
  const subscribe = async() => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/Basketball.m4a')
    );
    setSound(sound);

    console.log('Playing Sound');
    await TimeOutSound ? sound.playAsync() : null
  }

  useMemo(() => {
    subscribe()
  }, [TimeOutSound])

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
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

  const [TimerPandP, setTimerPandP] = useState(true)
  const [TimerPandPbtn, setTimerPandPBtn] = useState("Pause")
  LogBox.ignoreAllLogs()
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.MySlice.counter);
  console.log("counter",counter)

  let boom = datas[counter]
  
  const TimeDuration = useSelector((state) => state.MySlice.TimeDuration);
  const [checlDeviceMotion, setCheclDeviceMotion] = useState(false);
  const navigation = useNavigation();
  const [data, setData] = useState({});
  console.log("useState data", data);

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
              console.log("I own a up newgammaforminus90",boom);
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
              console.log("I own a up newgammafor90",);
              navigation.navigate("CorrectSceen");
              break;
            case 0:
              console.log("I own a down newgammafor90", );
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

  const handlePlayandPause  = () => {
    setTimerPandP(!TimerPandP)
    setTimerPandPBtn(TimerPandP == false ? "Pause" : "Play")
  }

  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3e2772",
      }}
      onPressIn={handlePlayandPause}
      // onPressOut={handlePlayandPause} //!
    >
      <View style={{marginLeft: 'auto',marginRight: 10,marginTop: 30}}>
      <Button title={TimerPandPbtn} onPress={handlePlayandPause}/>
      </View>
      <View style={{ justifyContent: "space-between", alignItems: "center" }}>
        <CountDown
          size={25}
          until={TimeDuration}
          onFinish={() => navigation.navigate("TimeOutScreen")}
          digitStyle={{ backgroundColor: "#3e2772", alignItems: "center" }}
          digitTxtStyle={{ color: "white" }}
          timeToShow={["S"]}
          timeLabels={{ d: null, h: null, m: null, s: null }}
          running={TimerPandP}
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
    </Pressable>
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
