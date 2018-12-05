import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Personal extends Component {
  render() {
    return (
      <View style={styles.containers}>
        <Text> Personal </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    paddingTop: 20
  }
})
