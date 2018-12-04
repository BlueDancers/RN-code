import { createStackNavigator, createNavigationContainer } from 'react-navigation'
import RouterConfig  from './RouterConfig'


const HomeStack = createStackNavigator(RouterConfig, {
  mode: 'card ',
  headerMode: 'float', // none 隐藏上标签栏  | float 苹果默认效果 | screen 安卓默认效果
  defaultNavigationOptions: {
    gesturesEnabled: true,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff', // 定义导航条的字体颜色 会覆盖headerTitleStyle的颜色
    
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
})

export default createNavigationContainer(HomeStack)