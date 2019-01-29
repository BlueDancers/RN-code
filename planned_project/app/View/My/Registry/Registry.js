import React, { Component } from 'react'
import { Text, View, StatusBar, Button, StyleSheet } from 'react-native'
import { StackActions } from 'react-navigation'
import TabHeader from '../../../Common/TabHeader'

export default class Registry extends Component {
  render() {
    const { goBack,dispatch } = this.props.navigation
    return (
      <View style={Style.Containers}>
        <TabHeader backGround="#F9F9F9" text="快捷登录" />
        <Text> 注册 </Text>
        <Button
          title="返回主页"
          onPress={() => {
            dispatch(StackActions.popToTop())
          }}
        />
      </View>
    )
  }
}

const Style = StyleSheet.create({
  Containers: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  }
})
