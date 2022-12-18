import { StyleSheet, LogBox } from 'react-native'
import React,{memo} from 'react'
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

export default memo(App)

const styles = StyleSheet.create({})