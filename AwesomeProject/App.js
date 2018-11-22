import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native'
import HeightandWidth from './pages/HeightandWidth'
import Texts from './pages/Texts'
import Touchs from './pages/Touchs'
import TouchAble from './pages/TouchAble'
import ScrollViewPage from './pages/ScrollViewPage'
import FlatListPage from './pages/FlatListPage'
import SectionListPage from './pages/SectionListPage'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor={'#DDDDDD'}
            style={styles.button}
            onPress={this.onPress}
          >
            <Text> 按钮组件 </Text>
          </TouchableHighlight>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>
              {this.state.count !== 0 ? this.state.count : null}
            </Text>
          </View>
        </View>
        <SectionListPage />
        {/* <FlatListPage /> */}
        {/* <ScrollViewPage /> */}
        {/* <TouchAble /> */}
        {/* <Touchs /> */}
        <Texts />
        <HeightandWidth />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 2
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
