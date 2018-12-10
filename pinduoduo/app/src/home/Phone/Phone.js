import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  SectionList,
  RefreshControl,
  ActivityIndicator
} from 'react-native'

export default class Phone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          title: '一线城市',
          data: ['北京', '上海', '广州', '深圳']
        },
        {
          title: '二线城市',
          data: ['杭州', '苏州', '成都', '武汉', '郑州']
        },
        {
          title: '三线城市',
          data: ['洛阳', '厦门', '青岛', '拉萨']
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.containers}>
        <SectionList
          sections={this.state.data}
          renderItem={data => this._renderItem(data)} //渲染视图
          renderSectionHeader={data => this._renderHeader(data)}
          ItemSeparatorComponent ={()=> <View style={styles.separator}></View>}
          stickySectionHeadersEnabled="true"
        />
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
  _renderItem = data => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{data.item}</Text>
      </View>
    )
  }
  _renderHeader = data => {
    let { title } = data.section
    return (
      <View style={styles.sectionHeader}>
        <Text>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    height: 100,
    flex: 1,
    backgroundColor: '#169',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    height: 50,
    flex: 1,
    backgroundColor: '#93ebbe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    flex: 1
  }
})
