import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import Storage from '../../../utils/Storage'
export default class CustomLabel extends Component {
  static navigationOptions = navigation => {
    console.log(navigation)
    return {}
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    stroage
      .getAllStorageKey()
      .then(res => {
        console.log(res)
      })
      .catch(res => {
        console.log(res)
      })
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
