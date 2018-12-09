import React from 'react'
import tabBarRouter from './tabBarRouter'
import ProductDetails from '../src/productDetails/ProductDetails'

export default {
  BottomTab: { //头部导航栏页面
    screen: tabBarRouter,
    navigationOptions: ()=> ({
      header: null
    })
  },
  ProductDetails: {
    screen: ProductDetails,
  }
}