import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
// 页面组件
import Home from './tabBars/Home'
// import Home from '../src/tabBar/Home'
import Recommend from '../src/tabBar/Recommend'
import Search from '../src/tabBar/Search'
import ChatWith from '../src/tabBar/ChatWith'
import Personal from '../src/tabBar/Personal'

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: (
          { tintColor } // 页面图标
        ) => <Ionicons name="ios-home" color={tintColor} size={24} />,
        tabBarColor: 'white' // 页面背景色
      }
    },
    Recommend: {
      screen: Recommend,
      navigationOptions: {
        tabBarLabel: '推荐',
        tabBarIcon: (
          { tintColor } // 页面图标
        ) => <AntDesign name="star" color={tintColor} size={24} />,
        tabBarColor: 'white' // 页面背景色
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: '搜索',
        tabBarIcon: (
          { tintColor } // 页面图标
        ) => <AntDesign name="search1" color={tintColor} size={24} />
      }
    },
    ChatWith: {
      screen: ChatWith,
      navigationOptions: {
        tabBarLabel: '聊天',
        tabBarIcon: (
          { tintColor } // 页面图标
        ) => <MaterialIcons name="sms" color={tintColor} size={24} />
      }
    },
    Personal: {
      screen: Personal,
      navigationOptions: {
        tabBarLabel: '个人',
        tabBarIcon: (
          { tintColor } // 页面图标
        ) => <MaterialIcons name="face" color={tintColor} size={24} />
      }
    }
  },
  {
    initialRouteName: 'Home', // 初始化页面
    activeColor: '#E80707', // 选中的菜单颜色
    inactiveColor: '#6D6D6D', // 非选中的菜单颜色
    barStyle: { backgroundColor: 'white' }, // 底部导航栏样式
    shifting: false
    //labeled: true // 当为true的时候,未选中的菜单不会显示文字
  }
)
