import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import Router from './app/Routes/Router'
import Storage from './app/Utils/Storage'
export default class App extends Component {
  componentDidMount() {
    console.log(StatusBar.currentHeight);
    Storage.setStorage('androidHeight',StatusBar.currentHeight.toString())
    .catch(res => {
      console.log(res);
    })
  }
  render() {
    return <Router />
  }
}
