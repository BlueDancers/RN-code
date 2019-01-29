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
      </View>
    )
  }
}
