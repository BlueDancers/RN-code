import React, { Component } from 'react'

import {
  Text, // 显示文本内容的组件
  View, // 搭建页面最基础的组件
  Image, // 显示图片内容的组件
  TextInput, // 文本输入框
  ScrollView, // 可以滚动的视图容器
  StyleSheet, // 提供类似css样式表的样式抽象层
  Button, // 简单的跨平台按钮
  Picker, // 在ios和android上调用各自的原生选择器控件
  Slider, // 滑动数值选择器
  Switch // 开关控件
} from 'react-native'

export default class ComponentsAndApi extends Component {
  constructor() {
    super()
    this.state = {
      language: 'JavaScript',
      position: 0,
      text: 0,
      value: false,
      disabled: false,
      changText: '切换Switch'
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text>
            value:{this.state.language} ---- position:{this.state.position}
          </Text>
          <Picker
            // onValueChange 某项被选中执行此回调 (itemValue:`被选中的value属性`, itemPosition: `选中的索引`)
            // selectdValue 默认选中的值
            // mode 指定以什么样的方式显示选择器  `dialog` 模态框  `dropdown`以选择器所在位置为锚点的一个下拉框
            // itemStyle 为每项标签添加样式
            style={{ backgroundColor: 'white' }}
            itemStyle={{ color: 'black' }}
            mode="dialog"
            selectedValue={this.state.language}
            onValueChange={(language, position) =>
              this.setState({
                language,
                position
              })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Net" value="net" />
            <Picker.Item label="ReactNative" value="rn" />
            <Picker.Item label="c#" value="c" />
            <Picker.Item label="php" value="php" />
          </Picker>
        </View>

        <View>
          {/* 
            disabled 设置是否禁止使用
            maximumTrackTintColor
            minimumTrackTintColor //左侧或者右侧的颜色 不确定
            style 不知道为什么这里没有生效
            minimumValue 规定滑块设置的最小值
            maximumValue 规定滑块设置的最大值
            step 单次滑块变化的最小值
            onValueChange 拖动滑块回调
            onSlidingComplete 松开滑块回调,无论值是否变化
            value 初始状态的位置
          */}
          <Slider />
          <Slider disabled={true} />
          <Slider maximumTrackTintColor="black" minimumTrackTintColor="blue" />
          <Slider style={{ borderWidth: 1, borderColor: 'red' }} />
          {/* 不生效 */}
          <Text>{this.state.text}</Text>
          <Slider
            minimumValue={5}
            maximumValue={20}
            value={10}
            step={1}
            onValueChange={text => {
              this.setState({ text })
            }}
            onSlidingComplete={text => this.setState({ text })}
          />
          <Slider value={0.5} />
        </View>
        {/* 
            trackColor 开启状态下的背景颜色
            tintColor 关闭状态下的背景颜色
            thumbColor 开关上按钮的颜色
            value 表示其开关是否打开
            onValueChange 当值改变的时候调用此回调函数，参数为新的值
        */}
        <View>
          <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
            <Button
              title={this.state.value ? '关闭' : '打开'}
              onPress={() => {
                this.setState({ value: !this.state.value })
              }}
            />
            <Switch
              style={{ marginLeft: 20 }}
              value={this.state.value}
              onTintColor="red"
              tintColor="blue"
              thumbColor="black"
            />
          </View>
          <View
            style={{ flexDirection: 'row', paddingLeft: 20, marginTop: 20 }}
          >
            <Button
              title={this.state.disabled ? '启动' : '禁用'}
              onPress={() => {
                this.setState({ disabled: !this.state.disabled })
              }}
            />
            <Switch
              style={{ marginLeft: 20 }}
              value={true}
              disabled={this.state.disabled}
            />
          </View>
          <View
            style={{ flexDirection: 'row', paddingLeft: 20, marginTop: 20 }}
          >
            <Text>{this.state.changText}</Text>
            <Switch
              value={this.state.value}
              onValueChange={value => {
                this.setState({
                  value,
                  changText: value ? 'switch 打开了' : 'switch关闭了'
                })
              }}
            />
          </View>
        </View>
      </View>
    )
  }
}
