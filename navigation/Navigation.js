import { StyleSheet, Text, View } from "react-native";
import React, { useState, memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen, {
  CorrectSceen,
  PassedSceen,
  TimeOutScreen,
} from "./../Screens/HomeScreen";
import InitialTimer from "./../Screens/InitialTimer";
import { StatusBar } from "expo-status-bar";
import IntroScreen from "./../Screens/IntroScreen";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [initlalTimeOut, setinitlalTimeOut] = useState(true);

  setTimeout(() => {
    setinitlalTimeOut(false);
  }, 4000);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="IntroScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="IntroScreen"
            component={IntroScreen}
            options={{ headerShown: false, orientation: "portrait" }}
          />
          {/* {initlalTimeOut ? ( */}
            <Stack.Screen
              name="InitialTimer"
              component={InitialTimer}
              options={{ headerShown: false, orientation: "landscape" }}
            />
          {/* ) : ( */}
             {/* <>  */}
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                  animation: "slide_from_right",
                  orientation: "landscape",
                }}
              />
              <Stack.Screen
                name="CorrectSceen"
                component={CorrectSceen}
                options={{ orientation: "landscape", presentation: "modal" }}
              />
              <Stack.Screen
                name="PassedSceen"
                component={PassedSceen}
                options={{
                  orientation: "landscape",
                  presentation: "modal",
                  animation: "slide_from_bottom",
                }}
              />
              <Stack.Screen
                name="TimeOutScreen"
                component={TimeOutScreen}
                options={{ orientation: "landscape" }}
              />
             {/* </>  */}
           {/* )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default memo(Navigation)

const styles = StyleSheet.create({});
