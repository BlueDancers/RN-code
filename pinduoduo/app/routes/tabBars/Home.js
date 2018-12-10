import { createMaterialTopTabNavigator } from 'react-navigation'
import Popular from '../../src/home/Popular/Popular'
import Store from '../../src/home/Store/Store'
import Phone from '../../src/home/Phone/Phone'
import Device from '../../src/home/Device/Device'
import Woman from '../../src/home/Woman/Woman'
import Food from '../../src/home/Food/Food'
import Motion from '../../src/home/Motion/Motion'
import Car from '../../src/home/Car/Car'
import Shoe from '../../src/home/Shoe/Shoe'
export default createMaterialTopTabNavigator(
  {
    Popular: {
      screen: Popular, // 配置页面
      navigationOptions: {
        tabBarLabel: '热门' // 头部标签名称
      }
    },
    Store: {
      screen: Store,
      navigationOptions: {
        tabBarLabel: '列表' //'百货'
      }
    },
    Phone: {
      screen: Phone,
      navigationOptions: {
        tabBarLabel: '分列'
      }
    },
    Device: {
      screen: Device,
      navigationOptions: {
        tabBarLabel: '电器'
      }
    },
    Woman: {
      screen: Woman,
      navigationOptions: {
        tabBarLabel: '女装'
      }
    },
    Food: {
      screen: Food,
      navigationOptions: {
        tabBarLabel: '食物'
      }
    },
    Motion: {
      screen: Motion,
      navigationOptions: {
        tabBarLabel: '运动'
      }
    },
    Car: {
      screen: Car,
      navigationOptions: {
        tabBarLabel: '汽车'
      }
    },
    Shoe: {
      screen: Shoe,
      navigationOptions: {
        tabBarLabel: '鞋子'
      }
    }
  },
  {
    initialRouteName: 'Popular',
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true,
      upperCaseLabel: false, // 是否大写
      activeTintColor: 'red', // 活动选项卡
      inactiveTintColor: 'red', // "非活动" 选项卡
      tabStyle: {
        // 选项卡样式
        width: 60,
        // paddingTop: 35,
        paddingBottom: 4
      },
      style: {
        backgroundColor: 'white' // 头部导航栏样式
      },
      indicatorStyle: {
        backgroundColor: 'red' // 指示器样式
      }
    }
  }
)
