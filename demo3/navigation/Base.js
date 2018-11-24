import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { Image } from 'react-native'
import { RootStack } from './HomeRouter'
import { SettingsStack } from './SettingsRouter'

export default createAppContainer(
  createBottomTabNavigator(
    {
      首页: { screen: RootStack },
      设置: { screen: SettingsStack }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state
          let iconName
          if (routeName === '首页') {
            iconName = `ios-home`
          } else if (routeName === '设置') {
            iconName = `ios-options`
          }

          // 在此处可以返回任何组件！
          // 我们通常使用react-native-vector-icons中的图标组件
          return <Ionicons name={iconName} size={25} color={tintColor} />
        }
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true
      }
    }
  )
)
