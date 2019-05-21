import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import TopBar from '../navigation/TopBar'
import NavigationUtils from '../utils/NavigationUtils'
export default class Hot extends Component {
  render() {
    NavigationUtils.Navigation = this.props.navigation
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <TopBar />
      </View>
    )
  }
}

class HotTab extends Component {
  render() {
    const { tabLabel } = this.props

    return (
      <View style={styles.container}>
        <Text>{tabLabel}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1
  }
})

{
  /* <Button
          title="跳转到trend页面"
          onPress={() => {
            this.props.navigation.navigate('trend')
          }}
        />
        <Button
          title="跳转到collection页面"
          onPress={() => {
            this.props.navigation.navigate('collection')
          }}
        />
        <Button
          title="跳转到Four页面"
          onPress={() => {
            this.props.navigation.navigate('Four')
          }}
        />
        <Button
          title="跳转到Five页面"
          onPress={() => {
            this.props.navigation.navigate('Five')
          }}
        /> */
}
