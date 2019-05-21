import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import NavigationUtils from '../utils/NavigationUtils'
export default class Welcome extends Component {
  render() {
    NavigationUtils.Navigation = this.props.navigation
    return (
      <View>
        <Text> 首屏 </Text>
        <Button
          title="跳转到第一页页面"
          onPress={() => {
            this.props.navigation.navigate('hot')
            NavigationUtils.goPage('hot')
          }}
        />
      </View>
    )
  }
}
