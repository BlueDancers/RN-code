import React from 'react'
import tabBarRouter from './tabBarRouter'


export default {
  BottomTab: {
    screen: tabBarRouter,
    navigationOptions: ()=> ({
      header: null
    })
  }
}