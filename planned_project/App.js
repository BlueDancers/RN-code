import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import AppContainer from './app/Routes/Router'
import Storage from './app/Utils/Storage'


export default class App extends Component {
  componentDidMount() {
    console.log(Platform.OS)
    console.log(StatusBar.currentHeight)
    StatusBar.setTranslucent(true)
    if (Platform.OS == 'android') {
      Storage.setStorage('TabHeight', StatusBar.currentHeight.toString())
    } else {
      console.log('苹果手机等待适配')
    }
    StatusBar.setBackgroundColor('rgba(0,0,0,0.4)')
    StatusBar.setBarStyle('dark-content')
  }
  render() {
    return <AppContainer />
  }
}
