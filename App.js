import { StyleSheet, LogBox } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './redux/MYStore';
import Navigation from './navigation/Navigation'

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