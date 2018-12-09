import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ProductDetails extends Component {
  render() {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text> {params.title} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
