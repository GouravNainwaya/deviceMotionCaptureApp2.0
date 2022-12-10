import { StyleSheet, Text, View,LogBox } from 'react-native'
import React from 'react'
import Navigation from './navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './redux/MYStore';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})