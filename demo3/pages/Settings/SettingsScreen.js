import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, StatusBar } from 'react-native'

export default class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: '设置'
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
