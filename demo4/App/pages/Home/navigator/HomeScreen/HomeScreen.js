import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Button,
  Platform,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native'
import Header from './Component/Header'
import HSwiper from './Component/HSwiper'
import Channel from './Component/Channel'

export default class HomeScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.containers} behavior="padding">
        <StatusBar
          backgroundColor="#f4511e"
          barStyle="light-content"
          animated={true}
          // translucent={true} //设置沉浸式状态栏
        />
        <Header />
        <HSwiper />
        <Channel />
        <View style={styles.views} />
        <Text>长列表.....</Text>
        <Button
          style={{ flex: 1 }}
          title="go to two"
          onPress={() =>
            this.props.navigation.navigate('Profile', {
              itemId: new Date(),
              otherParam: '我是标题'
            })
          }
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    // flex: 1,
  },
  views: {
    // flex: 9,
  }
})
