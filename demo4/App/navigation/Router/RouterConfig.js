import BottomTabNavigator from './BottomTab'
import ProfileScreen from '../../pages/Home/navigator/ProfileScreen'
import ModalScreen from '../../pages/Home/ModalScreen'
import DetailsScreen from '../../pages/Settings/DetailsScreen'
import OtherTwo from '../../pages/Other/OtherTwo'
import QRcode from '../../pages/Other/QRcode/QRcode'

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
      headerTitle: `two页`, // 标题  Ios 上的后退按钮使用的标题字符串, 或 null 禁用标签。
      title: '备选标题',
      
    })
  },
  OtherTwo: {
    screen: OtherTwo,
    navigationOptions: () => ({
      headerTitle: `设置`
    })
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: () => ({
      title: `列表`
    })
  },
  QRcode: {
    screen: QRcode,
    navigationOptions: () => ({
      title: '扫码'
    })
  }
}
