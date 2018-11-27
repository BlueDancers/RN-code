import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-swiper'

export default class HSwiper extends Component {
  render() {
    return (
      <View style={styles.containers}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={true}
          autoplay={true}
          autoplayTimeout={2}
          dot={
            <View
              style={{
                //未选中的圆点样式
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 9,
                height: 9,
                borderRadius: 18,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 35,
                marginBottom: 0
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                width: 9,
                height: 9,
                borderRadius: 18,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 35,
                marginBottom: 0,
                borderWidth: 1,
                borderColor:'rgba(0,0,0,0)'
              }}
            />
          }
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>轮播</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    height: 180,
    flexDirection: 'row'
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
