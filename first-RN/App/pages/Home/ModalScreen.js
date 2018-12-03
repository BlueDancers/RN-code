import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, StatusBar } from 'react-native'

export default class ModalScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar
          backgroundColor="white"
          // barStyle="light-content"
          animated={true}
          translucent={true} //设置沉浸式状态栏
        />
        <Text style={{ fontSize: 30 }}>我是全屏Modal</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
