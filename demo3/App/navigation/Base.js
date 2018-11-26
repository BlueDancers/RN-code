import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { RootStack } from './HomeRouter'
import { SettingsStack } from './SettingsRouter'
import { OtherStack } from './OtherRouter'

const routerSetting = createAppContainer(
  createBottomTabNavigator(
    {
      首页: {
        screen: RootStack,
        navigationOptions: ({ navigation }) => {
          return {
            tabBarVisible: true
          }
        }
      },
      设置: { screen: SettingsStack },
      其他: { screen: OtherStack }
    },
    {
      // 目前用于图标的显示设置
      defaultNavigationOptions: ({ navigation }) => ({
        // tabBarVisible: true,
        tabBarIcon: ({ focused, tintColor }) => {
          console.log(navigation.state)
          const { routeName } = navigation.state
          let iconName
          if (routeName === '首页') {
            iconName = `ios-home`
          } else if (routeName === '设置') {
            iconName = `ios-options`
          } else if (routeName === '其他') {
            iconName = `ios-chatbubbles`
          }
          // 通常使用react-native-vector-icons中的图标组件
          return <Ionicons name={iconName} size={25} color={tintColor} />
        }
      }),
      //底部标签的样式设置
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true
      }
    }
  )
)
export default routerSetting
