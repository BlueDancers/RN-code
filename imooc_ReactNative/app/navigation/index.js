import React from 'react'
import { Image, Button, Platform, ScrollView } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TopBar from './TopBar'
import One from '../pages/One'
import Two from '../pages/Two'
import Three from '../pages/Three'
import Five from '../pages/Five'
import Six from '../pages/Six'

// const BottomMater = createMaterialBottomTabNavigator(
//   {
//     TopBar: {
//       screen: TopBar,
//       navigationOptions: {
//         tabBarColor: '#3472EE', // 页面背景色
//         tabBarIcon: ({ tintColor }) => (
//           <Ionicons name="ios-home" color={tintColor} size={24} />
//         )
//       }
//     },
//     Two: {
//       screen: Two,
//       navigationOptions: {
//         tabBarColor: '#EC3E3E',
//         tabBarIcon: ({ tintColor }) => (
//           <Ionicons name="ios-options" color={tintColor} size={24} />
//         )
//       }
//     },
//     Three: {
//       screen: Three,
//       navigationOptions: {
//         tabBarColor: '#0EA748',
//         tabBarIcon: ({ tintColor }) => (
//           <Ionicons name="ios-chatbubbles" color={tintColor} size={24} />
//         )
//       }
//     }
//   },
//   {
//     initialRouteName: 'TopBar',
//     activeColor: 'white',
//     inactiveColor: 'gray',
//     shifting: true
//   }
// )

const BottomBar = createBottomTabNavigator(
  {
    One: {
      screen: One,
      navigationOptions: {
        title: 'One',
        tabBarIcon: ({ tintColor }) => {
          let sourceImg
          if (tintColor == '#1296db') {
            sourceImg = require('../image/one-active.png')
          } else {
            sourceImg = require('../image/one.png')
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
    Two: {
      screen: Two,
      navigationOptions: {
        title: 'Two',
        tabBarIcon: ({ tintColor }) => {
          console.log(tintColor)
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
    },
    Three: {
      screen: Three,
      navigationOptions: {
        title: 'Three',
        tabBarIcon: ({ tintColor }) => {
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
    }
  },
  {
    initialRouteName: 'One', // 初始化页面
    tabBarOptions: {
      activeTintColor: '#1296db',
      inactiveTintColor: 'black'
    }
  }
)

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

const Stack = createStackNavigator({
  BottomMater: {
    screen: BottomBar,
    navigationOptions: {
      header: null
    }
  },
  TopBar: {
    screen: TopBar,
    navigationOptions: {
      tabBarColor: '#3472EE', // 页面背景色
      header: null
    }
  },
  FiveDrawer: {
    screen: FiveDrawer,
    navigationOptions: {
      header: null
    }
  }
})


export default createAppContainer(Stack)
