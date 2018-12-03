import { createBottomTabNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import React from 'react'
import navigator from './TopTab/HomeRouter'
import SettingsStack from './TopTab/SettingsRouter'
import OtherStack from './TopTab/OtherRouter'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default createMaterialBottomTabNavigator(
  {
    navigator: {
      screen: navigator,
      navigationOptions: {
        tabBarLabel: '首页', // 页面名称
        tabBarIcon: ({ tintColor }) => ( // 页面图标
          <Ionicons name="ios-home" color={tintColor} size={24} />
        ),
        tabBarColor:'#3472EE' // 页面背景色
      }
    },
    SettingsStack: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarLabel: '设置',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-options" color={tintColor} size={24} />
        ),
        tabBarColor:'#EC3E3E'
      }
    },
    OtherStack: {
      screen: OtherStack,
      navigationOptions: {
        tabBarLabel: '其他',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-chatbubbles" color={tintColor} size={24} />
        ),
        tabBarColor:'#0EA748'
      }
    }
  },
  {
    initialRouteName: 'navigator', // 初始化页面
    activeColor: '#FFFFFF', // 选中的菜单颜色
    inactiveColor: '#CEC9C8', // 非选中的菜单颜色
    barStyle: { backgroundColor: 'white' }, // 底部导航栏样式
    shifting: true
    //labeled: false // 当为false的时候只显示图标
  }
)
