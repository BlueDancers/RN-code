import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Button,
  ScrollView
} from 'react-native'
import Swiper from './components/swiper'
import Menu from './components/menu'
import StopList from './components/stopList'
import { change } from '../../../store/actionCreators'
class Popular extends Component {
  constructor() {
    super()
    // SplashScreen.hide()
  }
  render() {
    return (
      <View>
        <StatusBar
          translucent={true} // 设置沉浸式状态栏 正常情况下 状态栏高度为20 这里的20 需要页面元素距离最上面 paddingTop:20
          backgroundColor={'rgba(0,0,0,0.1)'} // 设置状态栏颜色
          animated={true} // 允许动画切换效果
        />
        <ScrollView>
          {/* 头部swiper */}
          <Swiper />
          {/* 菜单栏 */}
          <Menu />
          {/* 商品信息 */}
          <StopList />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

const mapState = state => ({
  data: state.homePopular.get('data')
})

const mapDispatch = dispatch => ({
  changeData() {
    dispatch(change())
  }
})

export default connect(
  mapState,
  mapDispatch
)(Popular)
