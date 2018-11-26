import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Keyboard } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default class Header extends Component {
  componentDidMount() {
    this.KeyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    )
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _keyboardDidShow() {
    console.log('Keyboard Shown')
  }

  _keyboardDidHide() {
    console.log('Keyboard Hidden')
  }
  render() {
    return (
      <View style={styles.containers}>
        <View style={styles.left}>
          <AntDesign name={'qrcode'} size={25} color={'white'} />
          <Text style={styles.qrcode}>扫一扫</Text>
        </View>
        <View style={styles.center}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.right} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#f4511e'
  },
  left: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qrcode: {
    color: 'white',
    fontSize: 10
  },
  center: {
    flex: 8,
    justifyContent: 'center'
  },
  input: {
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'white'
  },
  right: {
    flex: 1
  }
})
