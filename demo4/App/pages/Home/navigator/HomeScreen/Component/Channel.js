import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
export default class Channel extends Component {
  constructor() {
    super()
    this.state = {
      barList: [
        [
          {
            img: require('../../../../../../static/1.png'),
            text: '天猫'
          },
          {
            img: require('../../../../../../static/2.png'),
            text: '聚划算'
          }
        ],
        [
          {
            img: require('../../../../../../static/3.png'),
            text: '天猫淘宝'
          },
          {
            img: require('../../../../../../static/4.png'),
            text: '饿了么'
          }
        ],
        [
          {
            img: require('../../../../../../static/5.png'),
            text: '天猫超市'
          },
          {
            img: require('../../../../../../static/1.png'),
            text: '6'
          }
        ],
        [
          {
            img: require('../../../../../../static/1.png'),
            text: '天猫'
          },
          {
            img: require('../../../../../../static/2.png'),
            text: '聚划算'
          }
        ],
        [
          {
            img: require('../../../../../../static/3.png'),
            text: '天猫淘宝'
          },
          {
            img: require('../../../../../../static/4.png'),
            text: '饿了么'
          }
        ],
        [
          {
            img: require('../../../../../../static/5.png'),
            text: '天猫超市'
          },
          {
            img: require('../../../../../../static/1.png'),
            text: '6'
          }
        ]
      ]
    }
  }
  render() {
    return (
      <View style={styles.containers}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text>我的频道</Text>
          </View>
          <View style={styles.headerRight}>
            <Text>全部频道</Text>
            <Entypo
              name={'chevron-thin-right'}
              size={15}
              color="rgba(0,0,0,.2)"
            />
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.state.barList.map((item, index) => {
            return (
              <View key={index} style={styles.listItem}>
                {item.map((i, x) => {
                  return (
                    <View key={i}>
                      <Image style={styles.ListsImg} source={i.img} />
                      <Text style={styles.ListText}>{i.text}</Text>
                    </View>
                  )
                })}
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    paddingLeft: 5,
    paddingRight: 5
  },
  header: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLeft: {
    fontWeight: 'bold'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 4,
    borderColor: 'rgba(0,0,0,.2)',
    borderRadius: 10,
    borderWidth: 1
  },
  lists: {
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  listItem: {
    flexDirection: 'column',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15
  },
  ListsImg: {
    width: 50,
    height: 50,
    borderRadius: 20
  },
  ListText: {
    textAlign: 'center',
    fontSize: 13,
    paddingTop: 5,
    paddingBottom: 5,
  }
})
