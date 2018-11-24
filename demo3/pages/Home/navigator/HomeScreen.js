import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Button,
  Platform,
  StatusBar
} from 'react-native'

class Logotitle extends Component {
  render() {
    return <Text style={{ color: 'white', fontSize: 20 }}>新的标题</Text>
  }
}

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: '新的标题',
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="info"
          color="#f4511e"
          backgroundColor="#f4511e"
        />
      ),
      headerRight: (
        <Button
          title="按钮"
          onPress={() => navigation.navigate('MyModal')}
          color="#f4511e"
          backgroundColor="#f4511e"
        />
      )
    }
  }
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#f4511e" />
        <Text> one </Text>
        <Button
          title="go to two"
          onPress={() =>
            this.props.navigation.navigate('Profile', {
              itemId: new Date(),
              otherParam: '我是标题'
            })
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
