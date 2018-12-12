import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Popular from '../../page/Puplar/Popular'
import Trending from '../../page/Trending/Trending'
import Favorite from '../../page/Favorite/Favorite'
import My from '../../page/My/My'

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Popular,
      navigationOptions: {
        tabBarLabel: '最热',
        tabBarIcon: (
          { tintColor } // 页面图标
        ) => <AntDesign name="star" color={tintColor} size={24} />,
        tabBarColor: 'white' // 页面背景色
      }
    },
    Trending: {
      screen: Trending,
      navigationOptions: {
        tabBarLabel: '趋势',
        tabBarIcon: (
          { tintColor } // 页面图标
        ) => <FontAwesome5 name="hotjar" color={tintColor} size={24} />
      }
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        tabBarLabel: '收藏',
        tabBarIcon: (
          { tintColor } // 页面图标
        ) => <FontAwesome5 name="heart" color={tintColor} size={24} />
      }
    },
    My: {
      screen: My,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: (
          { tintColor } // 页面图标
        ) => <Feather name="user" color={tintColor} size={24} />
      }
    }
  },
  {
    initialRouteName: 'Home',
    activeColor: '#E80707', // 选中的菜单颜色
    inactiveColor: '#6D6D6D', // 非选中的菜单颜色
    barStyle: { backgroundColor: 'white' }, // 底部导航栏样式
    shifting: false

  }
)
