import React, { Component } from 'react'
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from 'react-native'

export default class TouchAble extends Component {
  _onPressButton() {
    Alert.alert('你按了按钮')
  }
  _onLongPressButton() {
    Alert.alert('你长按了按钮')
  }
  render() {
    return (
      <View style={style.container}>
        {/* 普通交互触摸组件 */}
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={style.button}>
            <Text style={style.buttonText}>按下Highlight按钮</Text>
          </View>
        </TouchableHighlight>
        {/* 透明触摸组件 */}
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={style.button}>
            <Text style={style.buttonText}>Opacity按钮</Text>
          </View>
        </TouchableOpacity>
        {/* 安卓水滴按钮 */}
        <TouchableNativeFeedback
          // onPress={this._onPressButton}
          background={
            Platform.OS === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : ''
          }
        >
          <View style={style.button}>
            <Text style={style.buttonText}>波纹按钮</Text>
          </View>
        </TouchableNativeFeedback>
        {/* 无反馈按钮 */}
        <TouchableWithoutFeedback>
          <View style={style.button}>
            <Text style={style.buttonText}>无反馈按钮</Text>
          </View>
        </TouchableWithoutFeedback>
        {/* 长按事件 */}
        <TouchableHighlight onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={style.button}>
            <Text style={style.buttonText}>长按按钮</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})
