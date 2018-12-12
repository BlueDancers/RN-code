import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default class Tabitem extends Component {
  render() {
    let { full_name, description, owner, stargazers_count } = this.props
    return (
      <View style={styles.itemcontainers}>
        <Text style={styles.fullName}>{full_name}</Text>
        <Text style={styles.description}>描述：{description}</Text>
        <View style={styles.tabBottom}>
          <View style={styles.bottomLeft}>
            <Text>头像:</Text>
            <Image style={styles.images} source={{ uri: owner.avatar_url }} />
          </View>
          <View>
            <Text>点赞:{stargazers_count}</Text>
          </View>
          <View>
            <AntDesign name="star" color={'orange'} size={24}></AntDesign>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemcontainers: {
    flex: 1,
    marginHorizontal : 5,
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 8,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    marginVertical: 3,
    // ios
    shadowColor: 'gray',
    shadowOffset: {
      width: 0.5,
      height: 0.5
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    // android
    elevation: 2
  },
  fullName: {
    fontSize:16,
    marginBottom: 2,
    color: '#212121'
  },  
  description: {
    fontSize:14,
    marginBottom: 2,
    color: '#757575'
  },
  tabBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  bottomLeft: {
    flexDirection: 'row'
  },
  images: {
    width: 20,
    height: 20,
    marginLeft: 2,
    marginRight: 2,
  }
})
