import React, { Component } from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'

export default class Touchs extends Component {
  _onPressButton() {
    Alert.alert('标题', '你点击了按钮')
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="点击我"
            color="#841584"
          />
        </View>
        <View style={style.alternativeLayoutButtonContainer}>
          <Button onPress={this._onPressButton} title="按钮1" />
          <Button onPress={this._onPressButton} title="OK!" color="#841584" />
        </View>
      </View>
      
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
