import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, StatusBar } from 'react-native'

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions)
    return {
      headerTitle: navigation.getParam('otherParam'),
      headerRight: (
        <Button
          title="按钮"
          onPress={() => navigation.navigate('MyModal')}
          color="#f4511e"
          backgroundColor="#f4511e"
        />
      ),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor
    }
  }
  static tabBarVisible = false
  render() {
    const { params } = this.props.navigation.state
    console.log(params)
    const itemId = params ? params.itemId : null
    const otherParam = params ? params.otherParam : null
    return (
      <View>
        <Text> {JSON.stringify(itemId)} </Text>
        <Text>当前标题:{JSON.stringify(otherParam)}</Text>
        <Button
          title="返回上一页"
          onPress={() => {
            this.props.navigation.goBack()
          }}
        />
        <Button
          title="改变标题"
          onPress={() => {
            this.props.navigation.setParams({ otherParam: '更新' })
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
