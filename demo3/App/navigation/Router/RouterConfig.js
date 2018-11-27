import BottomTabNavigator from '../BottomTab'
import ProfileScreen from '../../pages/Home/navigator/ProfileScreen'
import ModalScreen from '../../pages/Home/ModalScreen'
import DetailsScreen from '../../pages/Settings/DetailsScreen'
import OtherTwo from '../../pages/Other/OtherTwo'

export default {
  BottomTab: {
    screen: BottomTabNavigator,
    navigationOptions: () => ({
      header: null
    })
  },
  MyModal: {
    screen: ModalScreen,
    navigationOptions: () => ({
      header: null // 隐藏标题栏
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: `two页` // 标题
    })
  },
  OtherTwo: {
    screen: OtherTwo,
    navigationOptions: () => ({
      title: `设置`
    })
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: () => ({
      title: `列表`
    })
  }
}
