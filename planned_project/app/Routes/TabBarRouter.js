import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

// 页面
import Category from '../View/TabBar/Category/Category'
import Main from '../View/TabBar/Main/Main'
import My from '../View/TabBar/My/My'
import OrderList from '../View/TabBar/OrderList/OrderList'

export default createMaterialBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarColor: 'white'
      }
    },
    Category: {
      screen: Category,
      navigationOptions: {
        tabBarLabel: '分类',
        tabBarColor: 'white'
      }
    },
    OrderList: {
      screen: OrderList,
      navigationOptions: {
        tabBarLabel: '购物车',
        tabBarColor: 'white'
      }
    },
    My: {
      screen: My,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarColor: 'white'
      }
    }
  },
  {
    initialRouteName: 'Main', // 初始化页面
    activeColor: '#E80707', // 选中的菜单颜色
    inactiveColor: '#6D6D6D', // 非选中的菜单颜色
    barStyle: { backgroundColor: 'white' }, // 底部导航栏样式
    shifting: false
    //labeled: true // 当为true的时候,未选中的菜单不会显示文字
  }
)
