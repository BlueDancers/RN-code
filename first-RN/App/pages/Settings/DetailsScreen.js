import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation
    const { params } = state
    console.log(state);
  }
  componentDidMount = () => {
    this.props.navigation.setParams({ titlePage: '初始化标题' })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>内部页面</Text>
        <TextInput
          style={{
            borderColor: 'rgba(0,0,0,0.5)',
            borderWidth: 1,
            height: 50,
            width: 300
          }}
          onChangeText={text => {
            this.props.navigation.setParams({ titlePage: text })
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
