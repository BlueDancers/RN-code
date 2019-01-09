import React, { Component } from 'react'
import { Text, View, StatusBar, Button } from 'react-native'
import TabHeader from '../../../Components/TabHeader'

export default class Registry extends Component {
  render() {
    const { goBack } = this.props.navigation
    return (
      <View>
        <TabHeader backGround='#F9F9F9' text='快捷登录'/>
        <Text> 注册 </Text>
        <Button
          title="回退"
          onPress={() => {
            goBack()
          }}
        />
      </View>
    )
  }
}
