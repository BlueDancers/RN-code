import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'

export default class Recommend extends Component {
  render() {
    return (
      <View style={styles.containers}>
        <Text> Recommend </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    paddingTop: 20
  }
})
