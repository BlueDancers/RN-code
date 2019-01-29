import React, { Component } from 'react'
import { Text, View, Button, StatusBar } from 'react-native'
import TabHeader from '../../../Common/TabHeader'
export default class My extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('完成挂载');
  }
  componentDidUpdate () {
    console.log('组件完成更新');
  }
  componentWillReceiveProps() {
    console.log('props发生变化');
  }
  render() {
    return (
      <View>
        <StatusBar translucent={true}></StatusBar>
        <Text> My </Text>
        <Button
          title="登录/注册"
          onPress={() => {
            this.props.navigation.navigate('Registry')
          }}
        />
      </View>
    )
  }
  gotoLogin = () => {
    console.log('跳转')
  }
}
