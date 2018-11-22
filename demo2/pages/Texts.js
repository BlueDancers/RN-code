import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

export default class Texts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '1'
    }
  }
  render() {
    return (
      // <View style={{ padding: 10 }}>
      //   <TextInput
      //     style={{ height: 40 }}
      //     placeholder="this is TextInput"
      //     onChangeText={text => {
      //       console.log(text)
      //       this.setState({
      //         text
      //       })
      //     }}
      //   />
      //   <Text>{this.state.text.split(' ').map(word => word && '🍕').join(' ')}</Text>
      // </View>
      <View></View>
    )
  }
}
