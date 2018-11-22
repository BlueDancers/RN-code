import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default class FlatListPage extends Component {
  render() {
    return (
      <View style={style.container}>
      {/* 
        FlatList用于显示一个垂直的滚动列表,其中的元素结构相似 但是数据不同
        FlatList可以增删
        FlatList会优先渲染屏幕可见的数据
        data 列表的数据源
        renderItem 从数据源中逐行解析数据,然后返回设置好合适的组件来渲染
      */}
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Devin'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}
      />
    </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
