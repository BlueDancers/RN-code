import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  BackHandler, // 监听并处理设备上的返回按钮
  DatePickerAndroid, // 打开时间选择器
  TimePickerAndroid,
  DrawerLayoutAndroid, // 渲染一个`DrawerLayou`抽屉布局
  ProgressBarAndroid,
  ToastAndroid,
} from 'react-native'

export default class AndroiAndApi extends Component {
  constructor() {
    super()
  }
  async showPicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      })
      if (action === DatePickerAndroid.dismissedAction) {
        console.log('用户还没有选好,或者取消了')
      } else {
        console.log(year, month, day)
        // 用户选择的时间日期
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message)
    }
  }
  async showTime() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: true
      })
      if (action !== TimePickerAndroid.dismissedAction) {
        console.log(hour, minute)
      }
    } catch (error) {}
  }
  showToast () {
    ToastAndroid.show('我是提示信息',ToastAndroid.SHORT)
  }
  render() {
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text
          style={{
            margin: 10,
            color: 'black',
            fontSize: 15,
            textAlign: 'center'
          }}
        >
          我是导航功能栏标题
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: 'black',
            fontSize: 15,
            textAlign: 'left'
          }}
        >
          1.功能1
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: 'black',
            fontSize: 15,
            textAlign: 'left'
          }}
        >
          2.功能2
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: 'black',
            fontSize: 15,
            textAlign: 'left'
          }}
        >
          3.功能3
        </Text>
      </View>
    )
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {/* 侧边抽屉组件 */}
          <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}
          >
            {/* 日历组件 */}
            <CustomButton
              text="点击弹出基本日期选择器"
              onPress={this.showTime.bind(this)}
            />
            {/* 时间组件 */}
            <CustomButton
              text="点击弹出基本时间选择器"
              onPress={this.showTime.bind(this)}
            />
            {/* Toast组件 */}
            <CustomButton
              text="点击弹出ToastModal"
              onPress={this.showToast.bind(this)}
            />
            {/* 
              加载中组件
              styleAttr 进度条样式
              indeterminate 是否为有状态进度条
              progress 当前进度
            */}
            <ProgressBarAndroid />
            <ProgressBarAndroid styleAttr="Horizontal" />
            <ProgressBarAndroid styleAttr="Small" color="#2196F3" />
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.5}
            />
          </DrawerLayoutAndroid>
        </View>
      </View>
    )
  }
}
class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
    padding: 15,
    backgroundColor: 'white',
    margin: 5
  },
  buttonText: {
    fontSize: 15
  }
})
