import {
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation'
import One from '../pages/hot'
import Four from '../pages/my'

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      One: {
        screen: Four, // 配置页面
        navigationOptions: {
          tabBarLabel: 'One'
        }
      },
      Four: {
        screen: Four,
        navigationOptions: {
          tabBarLabel: 'Four'
        }
      }
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
)
