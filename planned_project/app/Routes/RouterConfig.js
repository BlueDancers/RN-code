import React from 'react'
import { Image } from 'react-native'

import TabBarRouter from './TabBarRouter'
import Registry from '../View/My/Registry/Registry'
export default {
  TabBar: {
    screen: TabBarRouter,
    navigationOptions: () => ({
      header: null
    })
  },
  Registry: {
    screen: Registry,
    navigationOptions: () => ({
      header:null,
      headerStyle: {
        backgroundColor: '#F9F9F9'
      },
      headerTintColor: 'black',
    })
  }
}
