import React, { Component } from 'react'
import { StyleSheet, View,StatusBar } from 'react-native'
import ScrollableTabView, {
  ScrollableTabBar
} from 'react-native-scrollable-tab-view'
import PopularTab from '../../components/PopularTab/PopularTab'

export default class Popular extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View style={{ flex: 1,backgroundColor: 'white' }}>
        <StatusBar
          backgroundColor='#2196f3'
        >
        </StatusBar>
        <ScrollableTabView 
          renderTabBar={() => <ScrollableTabBar />}
          locked={false}
          tabBarBackgroundColor='#2196f3'
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='mintcream'
          tabBarUnderlineStyle={{
            backgroundColor: '#e7e7e7',
            height: 2
          }}
        >
          <PopularTab tabLabel="java" />
          <PopularTab tabLabel="ios" />
          <PopularTab tabLabel="adnroid" />
          <PopularTab tabLabel="javascript" />
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
