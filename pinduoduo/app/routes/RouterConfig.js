import tabBarRouter from './tabBarRouter'
import ProductDetails from '../src/productDetails/ProductDetails'
import Welcome from '../components/Welcome'
export default {
  BottomTab: { //头部导航栏页面
    screen: tabBarRouter,
    navigationOptions: ()=> ({
      header: null
    })
  },
  ProductDetails: {
    screen: ProductDetails,
  },
  // 欢迎页面
  Welcome: {
    screen: Welcome,
    navigationOptions: ()=> ({
      header: null
    })
  }
}