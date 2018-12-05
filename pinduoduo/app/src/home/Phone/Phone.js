import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions } from 'react-native'

export default class Phone extends Component {
  componentWillMount() {
    let { height, width } = Dimensions.get('window')
    console.log('高度' + height)
    console.log('宽度' + width)
  }
  render() {
    return (
      <View>
        <Text> Phone </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
