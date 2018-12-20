import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import JPushModule from 'jpush-react-native'
import UShare from '../../share/share'
import SharePlatform from '../../share/SharePlatform'
import { Geolocation } from 'react-native-amap-geolocation'
export default class ChatWith extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // JPushModule.initPush()
    // JPushModule.notifyJSDidLoad(resultCode => {
    //   // console.log(resultCode) // 0 为正常
    // })
    JPushModule.getInfo(map => {
      console.log(map)
    })
    JPushModule.addReceiveOpenNotificationListener(map => {
      console.log('进行一系列操作')
      console.log('map.extra: ' + map.extras)
      // 可执行跳转操作，也可跳转原生页面
      // this.props.navigation.navigate("SecondActivity");
    })
    // 接收推送通知
    JPushModule.addReceiveNotificationListener(message => {
      console.log('receive notification: ', message)
    })

    Geolocation.init({
      ios: '',
      android: '22089e85d5fd5f9c177ba3efdf9169de'
    })
  }

  render() {
    return (
      <View style={styles.containers}>
        <Text> ChatWith </Text>
        <Button
          title="点击推送"
          onPress={() => {
            JPushModule.sendLocalNotification({
              buildId: 1, // 设置通知样式
              id: 5, // 通知的 id, 可用于取消通知
              extra: { key1: 'value1', key2: 'value2' }, // extra 字段 就是我们需要传递的参数
              fireTime: new Date().getTime(), // 通知触发时间的时间戳（毫秒）
              badge: 8, // 本地推送触发后应用角标的 badge 值 （iOS Only）
              subtitle: 'subtitle', // 子标题 （iOS10+ Only）
              title: '通知',
              content: '您有未读消息'
            })
          }}
        />
        <Button
          title="分享"
          onPress={() => {
            UShare.share(
              '标题',
              '内容',
              'http://baidu.com',
              'http://dev.umeng.com/images/tab2_1.png',
              SharePlatform.QQ,
              message => {
                console.log(message)
                // message:分享成功、分享失败、取消分享
                // ToastAndroid.show(message,ToastAndroid.SHORT);
              }
            )
          }}
        />
        <Button
          title="定位"
          onPress={() => {
            Geolocation.setOptions({
              interval: 10000,
              distanceFilter: 20
            })
            Geolocation.addLocationListener(location => 
              // 进行定位的存储 等等
              console.log(location)
            )
            Geolocation.start()
            // Geolocation.stop()
          }}
        />
        <Button
          title="聊天"
          onPress={() => {
            this.props.navigation.navigate('Livechat')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    paddingTop: 20
  }
})
