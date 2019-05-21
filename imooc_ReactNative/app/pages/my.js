import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import NavigationUtils from '../utils/NavigationUtils'
export default class Four extends Component {
  render() {
    return (
      <View>
        <Text> Four </Text>
        <Button
          title="跳转到四页面"
          onPress={() => {
            console.log('跳转');
            // this.props.navigation.navigate('collection')
            NavigationUtils.goPage('collection')
          }}
        />
      </View>
    )
  }
}
