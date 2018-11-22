import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native'
import axios from 'axios'
export default class NetwockPage extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      dataSource: []
    }
  }
  componentDidMount() {
    axios
      .get('https://facebook.github.io/react-native/movies.json')
      .then(res => {
        this.setState({
          isLoading: true,
          dataSource: res.data.movies
        })
      })
      .catch(res => {
        console.log(res)
      })
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          {/* 加载中 */}
          <ActivityIndicator />
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      )
    }
  }
}
