import tabBarRouter from './tabBarRouter'
import ProductDetails from '../src/productDetails/ProductDetails'
import Welcome from '../components/Welcome'
import IM from '../src/chatWith/IM'
export default {
  BottomTab: {
    //头部导航栏页面
    screen: tabBarRouter,
    navigationOptions: () => ({
      header: null
    })
  },
  ProductDetails: {
    screen: ProductDetails
  },
  // 聊天页面
  Livechat: {
    screen: IM,
    navigationOptions: () => ({
      title: '聊天'
    })
  },
  // 欢迎页面
  Welcome: {
    screen: Welcome,
    navigationOptions: () => ({
      header: null
    })
  }
}
