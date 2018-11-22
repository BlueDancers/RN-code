import React, { Component } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
// var MOCKED_MOVIES_DATA = [
//   {
//     title: '标题',
//     year: '2015',
//     posters: { thumbnail: 'http://i.imgur.com/UePbdph.jpg' }
//   }
// ]

var REQUEST_URL =
  'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json'
export default class MoveDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moves: [],
      loaded: false
    }
    this.getData = this.getData.bind(this)
  }
  componentDidMount() {
    this.getData()
  }

  getData() {
    axios
      .get(REQUEST_URL)
      .then(res => {
        console.log(res.data.movies)
        this.setState({
          moves: this.state.moves.concat(res.data.movies),
          loaded: true
        })
      })
      .catch(res => {})
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView()
    } else {
      return this.renderMovie()
    }
    // let move = MOCKED_MOVIES_DATA[0]
  }
  renderLoadingView() {
    return (
      <View style={style.constainer}>
        <Text>正在加载电影资源...</Text>
      </View>
    )
  }
  renderMovie() {
    let { moves } = this.state
    return (
      <View style={style.constainer}>
        <FlatList
          style={style.list}
          data={moves}
          renderItem={this.renderMove}
          keyExtractor={(item, index) => {
            console.log(item);
            return item.id
          }}
        />
      </View>
    )
  }
  renderMove(data) {
    let item = data.item
    return (
      <View style={style.constainer}>
        <Image
          style={style.thumbnail}
          source={{ uri: item.posters.thumbnail }}
        />
        <View style={style.rightContainer}>
          <Text style={style.title}>{item.title}</Text>
          <Text style={style.year}>{item.year}</Text>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  thumbnail: {
    width: 52,
    height: 81
  },
  rightContainer: {
    flex: 1
    // backgroundColor:'red'
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
})
