import { createStackNavigator, createAppContainer } from 'react-navigation'
import RouerConfig from './RouerConfig'

const HomeStack = createStackNavigator(RouerConfig, {
  mode: 'card',
  headerMode: 'screen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff', // 定义导航条的字体颜色 会覆盖headerTitleStyle的颜色

    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
})

export default createAppContainer(HomeStack)
