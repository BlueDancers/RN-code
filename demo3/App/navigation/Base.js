import { createStackNavigator, createAppContainer } from 'react-navigation'
import BottomTabNavigator from './Router/BottomTab'
import RouterConfig from './Router/RouterConfig'

const HomeStack = createStackNavigator(RouterConfig, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
})

export default createAppContainer(HomeStack)
