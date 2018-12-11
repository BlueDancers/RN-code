import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Button,
  ScrollView,
  Dimensions
} from 'react-native'
import Swiper from './components/swiper'
import Menu from './components/menu'
import StopList from './components/stopList'
import TopButtonShow from './components/topButtonShow'
import {
  showchangeTopButton,
  unShowchangeTopButton
} from './store/actionCreators'

// 获取屏幕高度
let devHeight = Dimensions.get('window').height

class Popular extends Component {
  constructor() {
    super()
    // SplashScreen.hide()
    this.state = {
      scrollView: null
    }
  }
  componentDidMount() {
    let isOne = false
    if(isOne) {
      this.props.navigation.navigate('Welcome')
    }
    // console.log(this.props.navigation.navigate('Welcome'));
  }
  render() {
    return (
      <View>
        <StatusBar
          translucent={false} // 设置沉浸式状态栏 正常情况下 状态栏高度为20 这里的20 需要页面元素距离最上面 paddingTop:20
          backgroundColor={'rgb(255,255,255)'} // 设置状态栏颜色
          animated={true} // 允许动画切换效果
        />
        <ScrollView
          onScroll={e => {
            let screenHeight = e.nativeEvent.contentOffset.y
            if (devHeight < screenHeight) {
              this.props.showchangeTopbutton()
            } else {
              this.props.unShowchangeTopbutton()
            }
          }}
          ref="textInputRefer"
        >
          {/* 头部swiper */}
          <Swiper />
          {/* 菜单栏 */}
          <Menu />
          {/* 商品信息 */}
          <StopList
            gotoDetails={title => {
              this.props.navigation.navigate('ProductDetails', {
                title
              })
            }}
          />
        </ScrollView>
        {/* 返回顶部 */}
        <TopButtonShow gotoTop={this.gotoTop} />
      </View>
    )
  }
  gotoTop = () => {
    // 定位到顶部
    this.refs.textInputRefer.scrollTo({ x: 0, y: 0, animated: true }, 1)
  }
}

const styles = StyleSheet.create({})

const mapState = state => ({
  data: state.homePopular.get('data')
})

const mapDispatch = dispatch => ({
  showchangeTopbutton() {
    dispatch(showchangeTopButton())
  },
  unShowchangeTopbutton() {
    dispatch(unShowchangeTopButton())
  }
})

export default connect(
  mapState,
  mapDispatch
)(Popular)
