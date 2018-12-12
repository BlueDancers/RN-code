import tabBarRoutes from './tabBarRoutes'
export default {
  tabBar: {
    screen: tabBarRoutes,
    navigationOptions: () => ({
      header: null
    })
  }
}
