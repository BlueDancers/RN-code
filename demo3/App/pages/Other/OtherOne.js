import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'

export default class OtherOne extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }
  render() {
    return (
      <View>
        <Text> OtherOne </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('OtherTwo')
          }}
        >
          <Text>跳转到Two页面</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
