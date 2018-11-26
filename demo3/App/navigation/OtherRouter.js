import { createStackNavigator } from 'react-navigation'
import OtherOne from '../pages/Other/OtherOne'
import OtherTwo from '../pages/Other/OtherTwo'

const OtherStack = createStackNavigator(
  {
    OtherOne: {
      screen: OtherOne,
      navigationOptions: () => ({
      })
    },
    OtherTwo: {
      screen: OtherTwo,
      navigationOptions: () => ({
        title: `设置`
      })
    }
  },
  {
    // headerMode: 'none'
  }
)

export { OtherStack }
