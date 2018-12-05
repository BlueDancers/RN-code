import React from 'react'
import tabBarRouter from './tabBarRouter'


export default {
  BottomTab: { //头部导航栏页面
    screen: tabBarRouter,
    navigationOptions: ()=> ({
      header: null
    })
  }
}