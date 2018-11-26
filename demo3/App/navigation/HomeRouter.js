import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import HomeScreen from '../pages/Home/navigator/HomeScreen/HomeScreen'
import ProfileScreen from '../pages/Home/navigator/ProfileScreen'
import ModalScreen from '../pages/Home/ModalScreen'

const navigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: 'Home', // 定义初始页面
    // headerMode: 'none', // 标题全部隐藏
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)
const RootStack = createStackNavigator(
  {
    Main: {
      screen: navigator
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export { RootStack }
