import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Keyboard } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
export default class Header extends Component {
  render() {
    return (
      <View style={styles.containers}>
        <View style={styles.left}>
          <AntDesign name={'scan1'} size={25} color={'white'} />
          <Text style={styles.qrcode}>扫一扫</Text>
        </View>
        <View style={styles.center}>
          <SimpleLineIcons style={styles.InputLeftImg} name={'magnifier'} size={18} color={'#AFA9A8'} />
          <TextInput style={styles.input} />
          <SimpleLineIcons style={styles.InputRightImg} name={'camera'} size={18} color={'#AFA9A8'} />
        </View>
        <View style={styles.right}>
          <AntDesign name={'qrcode'} size={25} color={'white'} />
          <Text style={styles.qrcode}>会员码</Text>
        </View>
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
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qrcode: {
    color: 'white',
    fontSize: 10
  },
  center: {
    flex: 7,
    justifyContent: 'center'
  },
  InputLeftImg: {
    position: 'absolute',
    top:16,
    left:10,
    zIndex: 10
  },
  InputRightImg: {
    position:'absolute',
    top:16,
    right:10,
    zIndex: 10
  },
  input: {
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 32,
    paddingRight: 5,
    backgroundColor: 'white',
    borderRadius: 20
  },
  right: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
