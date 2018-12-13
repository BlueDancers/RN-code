import tabBarRoutes from './tabBarRoutes'
import CustomLabel from '../page/My/CustomLabel/CustomLabel'
export default {
  tabBar: {
    screen: tabBarRoutes,
    navigationOptions: () => ({
      header: null
    })
  },
  CustomLabel: {
    screen: CustomLabel,
    navigationOptions: () => ({
      title: '标签'
    })
  }
}
