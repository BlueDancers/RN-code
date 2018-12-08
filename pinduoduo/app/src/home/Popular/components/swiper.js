import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
class swiper extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width
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
                backgroundColor: 'white',
                width: 8,
                height: 8,
                borderRadius: 18,
                marginLeft: 6,
                marginRight: 6,
                marginTop: 35,
                marginBottom: -15
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'red',
                width: 8,
                height: 8,
                borderRadius: 18,
                marginLeft: 6,
                marginRight: 6,
                marginTop: 35,
                marginBottom: -15
              }}
            />
          }
        >
          <View style={styles.slide}>
            <Image
              style={[styles.image, { width: screenWidth }]}
              source={require('../../../../public/images/Home/Popular/0c17288d4a879610343eae586fabbc70.webp')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={[styles.image, { width: screenWidth }]}
              source={require('../../../../public/images/Home/Popular/23e66d95e126bac54960f8b58c60022b.webp')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={[styles.image, { width: screenWidth }]}
              source={require('../../../../public/images/Home/Popular/5c0c9d938b49cc18fa1b77b3d4eaca56.webp')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={[styles.image, { width: screenWidth }]}
              source={require('../../../../public/images/Home/Popular/edcaa84386e49f5854244c2b565bf075.webp')}
            />
          </View>
          {/* 从store里面取出来循环显示不正常 因为无法看到dom,无法调试 */}
          {/* {this.props.swiperList.map(e => (
            <View style={styles.slide}>
              <Image
                style={[styles.image, { width: screenWidth }]}
                source={e.get('img')}
              />
            </View>
          ))} */}
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
  slide: {
    flex: 1,
    height: 200
  },
  image: {
    flex: 1,
    height: 250
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

const mapState = state => {
  return {
    swiperList: state.homePopular.get('swiper')
  }
}

export default connect(
  mapState,
  null
)(swiper)
