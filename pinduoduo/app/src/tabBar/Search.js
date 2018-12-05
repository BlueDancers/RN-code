import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Search extends Component {
  render() {
    return (
      <View style={styles.containers}>
        <Text> Search </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    paddingTop: 20
  }
})
