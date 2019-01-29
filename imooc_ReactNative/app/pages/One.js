import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class One extends Component {
  render() {
    return (
      <View>
        <Button
          title="跳转到TopBar页面"
          onPress={() => {
            this.props.navigation.navigate('TopBar')
          }}
        />
        <Button
          title="跳转到Two页面"
          onPress={() => {
            this.props.navigation.navigate('Two')
          }}
        />
        <Button
          title="跳转到Three页面"
          onPress={() => {
            this.props.navigation.navigate('Three')
          }}
        />
        <Button
          title="跳转到Four页面"
          onPress={() => {
            this.props.navigation.navigate('Four')
          }}
        />
        <Button
          title="跳转到Five页面"
          onPress={() => {
            this.props.navigation.navigate('Five')
          }}
        />
      </View>
    )
  }
}
