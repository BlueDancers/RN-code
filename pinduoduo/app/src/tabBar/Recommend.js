import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  SwipeableFlatList,
  TouchableHighlight,
  Alert
} from 'react-native'

const data = [
  {
    key: 'like',
    data: 'Like!'
  },
  {
    key: 'heart',
    data: 'Heart!'
  },
  {
    key: 'party',
    data: 'Party!'
  }
]

export default class Recommend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: ['北京', '上海', '深圳', '广州'],
      isLoading: false
    }
  }
  render() {
    return (
      <View style={styles.containers}>
        <SwipeableFlatList
          data={this.state.city}
          renderQuickActions={this._genQuickAction}
          bounceFirstRowOnMount={false} // 设置初始状态的侧滑提示
          renderItem={data => this._renderItem(data)} //渲染视图
          maxSwipeDistance={100}  // 设置侧滑距离
        />
      </View>
    )
  }

  _genQuickAction = () => {
    return (
      <View style={styles.quickContainers}>
        <TouchableHighlight
          onPress={() => {
            alert('确认删除吗')
          }}
        >
          <View style={styles.quick}>
            <Text style={styles.text}>删除</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
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
        }, 5000)
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
    }, 3000)
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1
  },
  item: {
    backgroundColor: '#169',
    height: 100,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  },
  itemText: {
    color: 'white',
    fontSize: 20
  },
  buttonLoad: {
    alignItems: 'center'
  },
  quickContainers : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
    marginBottom: 15,
  },
  quick: {
    backgroundColor: 'red',
    flex:1,
    alignItems: 'flex-end',
    justifyContent:'center',
    padding: 10,
    width: 100
  }
})
