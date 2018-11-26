import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class OtherTwo extends Component {
  render() {
    return (
      <View>
        <Text> OtherTwo </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack()
          }}
        >
          <Text>跳转到One页面</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
