import React, { Component } from 'react'
import { Text, View, Button, StatusBar } from 'react-native'
import TabHeader from '../../../Components/TabHeader'
export default class My extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text> My </Text>
        <Button
          title="登录/注册"
          onPress={() => {
            this.props.navigation.navigate({ routeName: 'Registry' })
          }}
        />
      </View>
    )
  }
  gotoLogin = () => {
    console.log('跳转')
  }
}
