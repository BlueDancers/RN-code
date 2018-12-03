import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from '../../../pages/Home/navigator/HomeScreen/HomeScreen'

export default createDrawerNavigator({
  Home: {
    screen: HomeScreen
  }
})
