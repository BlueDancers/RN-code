import { createMaterialTopTabNavigator } from 'react-navigation'
import One from '../pages/One'
import Four from '../pages/Four'

export default createMaterialTopTabNavigator(
  {
    One: {
      screen: One, // 配置页面
      navigationOptions: {
        tabBarLabel: 'One'
      }
    },
    Four: {
      screen: Four,
      navigationOptions: {
        tabBarLabel: 'Four'
      }
    },

  },
  {
    initialRouteName: 'One',
    lazy: true,
    tabBarPosition: 'top',
    optimizationsEnabled: true, // 时候将Tab也嵌套到页面中,如果是改tab也失去焦点,将会被移除当前页,提高内存使用率
    tabBarOptions: {
      scrollEnabled: true,
      upperCaseLabel: false, // 是否大写
      activeTintColor: 'red', // 活动选项卡
      inactiveTintColor: 'red', // "非活动" 选项卡
      tabStyle: {
        // 选项卡样式
        // width: 60,
        // paddingTop: 35,
        paddingBottom: 4
      },
      pressColor: 'gray', // 添加点击动效
      style: {
        backgroundColor: 'white' // 头部导航栏样式
      },
      indicatorStyle: {
        backgroundColor: 'red' // 指示器样式
      }
    }
  }
)
