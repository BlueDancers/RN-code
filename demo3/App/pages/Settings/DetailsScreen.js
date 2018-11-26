import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: '列表',
    tabBarVisible: true
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
