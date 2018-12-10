import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native'

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: ['北京', '上海', '深圳', '广州'],
      isLoading: false
    }
  }
  _renderItem = data => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{data.item}</Text>
      </View>
    )
  }
  _loadData = () => {
    this.setState(
      {
        isLoading: true
      },
      () => {
        setTimeout(() => {
          let newState = [...this.state.city, '安徽']
          this.setState({
            city: newState,
            isLoading: false
          })
        }, 2000)
      }
    )
  }
  _genIndicator = () => {
    return (
      <View style={styles.buttonLoad}>
        <ActivityIndicator color={'red'} size={'small'} animating={true} />
        <Text>加载更多中........</Text>
      </View>
    )
  }
  _initData = () => {
    setTimeout(() => {
      let newState = [...this.state.city, '安徽']
      this.setState({
        city: newState
      })
    }, 2000)
  }

  render() {
    return (
      <View style={styles.containers}>
        <FlatList
          data={this.state.city}
          renderItem={data => this._renderItem(data)} //渲染视图
          // 如果使用默认的刷新样式 那就是下面的写法
          // refreshing={this.state.isLoading}
          // onRefresh={() => {
          //   console.log('下拉树新')
          //   this._loadData()
          // }}
          refreshControl={
            // 自定义下拉刷新的组件 如果不需要直接写 refreshing onRefresh 这两个方法
            <RefreshControl
              // title="加载中..." IOS
              progressBackgroundColor="white"
              colors={['red', 'blue', 'black']}
              refreshing={this.state.isLoading}
              onRefresh={() => {
                console.log('下拉树新')
                this._loadData()
              }}
            />
          }
          // 指定下拉属性的样式
          // 下拉样式不需要取消,因为数据来了,下拉刷新样式就直接被数据挤下去了,所以不需要隐藏
          ListFooterComponent={() => this._genIndicator()}
          // 触底的回调函数 触底所在的位置 由 `onEndReachedThreshold` 设置 ,一般情况下使用默认机了
          onEndReached={() => {
            this._initData()
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1
  },
  item: {
    backgroundColor: '#169',
    height: 200,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black'
  }, 
  itemText: {
    color: 'white',
    fontSize: 20
  },
  buttonLoad: {
    alignItems: 'center'
  }
})
