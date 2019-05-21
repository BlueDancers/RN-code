import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Five extends Component {
  render() {
    return (
      <View>
        <Text>Five页面</Text>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="打开抽屉"
        />
        <Button
          title="跳转到欢迎页面"
          onPress={() => {
            this.props.navigation.navigate('welcomes')
          }}
        />
      </View>
    )
  }
}
