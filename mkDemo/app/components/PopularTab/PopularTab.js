import React, { Component } from 'react'
import { View, FlatList, RefreshControl } from 'react-native'
import { getUrl } from '../../config/config'
import axios from 'axios'

import Tabitem from './Tabitem'
export default class PopularTab extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      loading: false
    }
  }
  componentDidMount() {
    this.onload()
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.text}
          renderItem={this.renderItem}
          keyExtractor={item => {
            return item.id.toString()
          }}
          refreshControl={<RefreshControl 
            refreshing={this.state.loading} // 下拉刷新状态
            colors={['blue']} // loading颜色
            onRefresh={()=> { // 下拉属性的回调
              this.onload()
            }}
          />}
        />
      </View>
    )
  }

  renderItem = item => {
    console.log(item)
    let { full_name, description, owner, stargazers_count } = item.item
    return (
      <Tabitem
        full_name={full_name}
        description={description}
        owner={owner}
        stargazers_count={stargazers_count}
      />
    )
  }

  onload = () => {
    this.setState({
      loading: true
    })
    console.log(this.props.tabLabel)
    axios.get(getUrl(this.props.tabLabel)).then(res => {
      console.log(res)
      this.setState({
        text: res.data.items,
        loading: false
      })
    })
  }
}
