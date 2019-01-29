import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Six extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="打开抽屉"
        />
        <Text>six页面</Text>
      </View>
    )
  }
}
