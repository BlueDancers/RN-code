// 启动页面
import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome </Text>
        <TouchableHighlight style={styles.gotoHome}>
          <Text
            style={styles.Text}
            onPress={() => {
              console.log(this.props.navigation);
              this.props.navigation.navigate('BottomTab')
            }}
          >
            进入首页
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  gotoHome: {
    backgroundColor: 'blue'
  },
  Text: {
    color: 'white'
  }
})
