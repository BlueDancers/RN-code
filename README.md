# RN

> 仿照拼多多的一个 RNapp

### 几乎必备的插件

React Navigation 3.x 顺带安装RN的图标库

```bash
yarn add react-navigation // RN导航库
yarn add react-native-gesture-handler // RN 导航库依赖
npm install react-native-vector-icons --save //图标库
npm install react-navigation-material-bottom-tabs react-native-paper // 懒加载底部路由
npm install react-native-splash-screen --save // 启动页面 解决闪屏问题
npm install axios --save
react-native link 
```

> react-native link 我的理解是 将 这个库中的底层代码与android IOS系统做连接,类似于 "注册" 吧



### 使用redux的需要安装的全部插件

```bash
 npm install redux --save 
 npm install react-redux --save 
 npm install immutable --save
 npm install redux-thunk --save
```

### 解决打开APP闪屏问题

解决闪屏问题插件,我先使用的是`rn-splash-screen`,开发环境没有问题,但是打包总是失败,后面就换了[**react-native-splash-screen**](https://github.com/crazycodeboy/react-native-splash-screen),这个 测试 打包都可以 不过 使用上比前者复杂一点







### 相关文章

[RN配置沉浸式状态栏]()

[React-Native项目中使用Redux](https://www.cnblogs.com/wuvkcyan/p/10081874.html)

