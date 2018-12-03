import { createDrawerNavigator } from 'react-navigation'
import SettingsScreen from '../../../pages/Settings/SettingsScreen'

export default createDrawerNavigator({
  Settings: { screen: SettingsScreen }
})
