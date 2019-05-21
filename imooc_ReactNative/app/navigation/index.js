import React from 'react'
import { Image, Button, Platform, ScrollView } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation'
import TopBar from './TopBar'
import hot from '../pages/hot'
import trend from '../pages/trend'
import collection from '../pages/collection'
import Five from '../pages/Five'
import Six from '../pages/Six'
import Four from '../pages/my'
import welcome from '../pages/welcome'

// 底部导航栏
const BottomBar = createBottomTabNavigator(
  {
    hot: {
      screen: hot,
      navigationOptions: {
        title: '最热',
        tabBarIcon: ({ tintColor }) => {
          let sourceImg
          if (tintColor == '#1296db') {
            sourceImg = require('../image/hot-active.png')
          } else {
            sourceImg = require('../image/hot.png')
          }
          return (
            <Image
              source={sourceImg}
              style={{ width: 24, height: 24 }}
              color={tintColor}
            />
          )
        }
      }
    },
    trend: {
      screen: trend,
      navigationOptions: {
        title: '趋势',
        tabBarIcon: ({ tintColor }) => {
          console.log(tintColor)
          let sourceImg
          if (tintColor == '#1296db') {
            sourceImg = require('../image/message-active.png')
          } else {
            sourceImg = require('../image/message.png')
          }
          return (
            <Image
              source={sourceImg}
              style={{ width: 24, height: 24 }}
              color={tintColor}
            />
          )
        }
      }
    },
    collection: {
      screen: collection,
      navigationOptions: {
        title: '收藏',
        tabBarIcon: ({ tintColor }) => {
          let sourceImg
          if (tintColor == '#1296db') {
            sourceImg = require('../image/home-active.png')
          } else {
            sourceImg = require('../image/home.png')
          }
          return (
            <Image
              source={sourceImg}
              style={{ width: 24, height: 24 }}
              color={tintColor}
            />
          )
        }
      }
    },
    my: {
      screen: Four,
      navigationOptions: {
        title: '我的',
        tabBarIcon: ({ tintColor }) => {
          let sourceImg
          if (tintColor == '#1296db') {
            sourceImg = require('../image/my-active.png')
          } else {
            sourceImg = require('../image/my.png')
          }
          return (
            <Image
              source={sourceImg}
              style={{ width: 24, height: 24 }}
              color={tintColor}
            />
          )
        }
      }
    }
  },
  {
    initialRouteName: 'hot', // 初始化页面
    tabBarOptions: {
      activeTintColor: '#1296db',
      inactiveTintColor: 'black'
    }
  }
)

// 侧边栏页面
const FiveDrawer = createDrawerNavigator(
  {
    Five: {
      screen: Five,
      navigationOptions: {
        drawerLabel: 'Five'
      }
    },
    Six: {
      screen: Six,
      navigationOptions: {
        drawerLabel: 'Six'
      }
    }
  },
  {
    initialRouteName: 'Five',
    drawerWidth: 200,
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
)

// 全局路由
const Stack = createStackNavigator(
  {
    BottomMater: {
      // 底部导航栏
      screen: BottomBar,
      navigationOptions: {
        header: null
      }
    },
    // TopBar: {
    //   // 头部导航栏
    //   screen: TopBar,
    //   navigationOptions: {
    //     tabBarColor: '#3472EE', // 页面背景色
    //     header: null
    //   }
    // },
    FiveDrawer: {
      // 侧边导航栏
      screen: FiveDrawer,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'BottomMater'
  }
)
// 欢迎页面
const welcomePage = createStackNavigator({
  welcomes: {
    screen: welcome,
    navigationOptions: {
      header: null
    }
  }
})

// 总挂载点
const Page = createSwitchNavigator(
  {
    welcome: welcomePage,
    Stack: Stack
  }
)

export default createAppContainer(Page)
