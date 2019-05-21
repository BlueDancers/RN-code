/**
 * @export 全局导航跳转工具类
 * @class NavigationUtils
 */
export default class NavigationUtils {
  /**
   * 返回上一页
   * @param {Object} navigation
   */
  static goBack(navigation) {
    navigation.goBack()
  }
  /**
   * 回到首页
   * @param {Object} navigation
   */
  static resetToHomePage(navigation) {
    navigation.navigate('Hot')
  }
  /**
   *
   *
   * 跳转页面
   * @param {*} navigation
   * @param {*} page
   * @param {*} [params={}]
   * @memberof NavigationUtils
   */
  static goPage(page, params = {}) {
    const navigation = NavigationUtils.Navigation
    navigation.navigate(page, params)
  }
}
