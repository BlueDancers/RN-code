import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Storage from '../../../Utils/Storage'
export default class My extends Component {

  render() {
    Storage.getStorage('androidHeight').then(res => {
      console.log(res);
    })
    .catch(res => {
      console.log(res);
    })
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
