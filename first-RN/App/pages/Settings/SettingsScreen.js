import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, StatusBar } from 'react-native'

export default class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: '设置'
    }
  }
  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>第二页面</Text>
        <Button title="Go to Home" onPress={() => navigate('Home')} />
        <Button title="Go to Details" onPress={() => navigate('Details')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
