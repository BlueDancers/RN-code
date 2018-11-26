import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import SettingsScreen from '../pages/Settings/SettingsScreen'
import DetailsScreen from '../pages/Settings/DetailsScreen'

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen }
})


export {
  SettingsStack
}