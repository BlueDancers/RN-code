
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class My extends Component {
  render() {
    return (
      <View>
        <Text> 我的 </Text>
        <Text onPress={this.gotoCustomLabel}>自定义标签</Text>
      </View>
    )
  }
  gotoCustomLabel = () => {
    this.props.navigation.navigate('CustomLabel')
  }
}

const styles = StyleSheet.create({})
