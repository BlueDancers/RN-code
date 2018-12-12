import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  AsyncStorage,
  Button
} from 'react-native'
import Toast, { DURATION } from 'react-native-easy-toast'
export default class Trending extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: '',
      value: ''
    }
  }
  render() {
    return (
      <View>
        <Text>键</Text>
        <TextInput
          onChangeText={key => {
            this.setState({
              key
            })
          }}
          style={{ borderWidth: 1, margin: 6 }}
        />
        <Text>值</Text>
        <TextInput
          onChangeText={value => {
            this.setState({
              value
            })
          }}
          style={{ borderWidth: 1, margin: 6 }}
        />
        <Button title="保存" onPress={this.onSave} />
        <Button title="移除" onPress={this.remove} />
        <Button title="取出" onPress={this.onFetch} />
        <Toast ref={toast => this.toast = toast}></Toast>
      </View>
    )
  }
  onSave = () => {
    let { key, value } = this.state
    console.log(key, value)
    AsyncStorage.setItem(key, value, err => {
      if (!err) {
        this.toast.show(`${key}值存储成功`,DURATION.LENGTH_LONG)
      }else {
        this.toast.show(`保存失败`,DURATION.LENGTH_LONG)
      }
    })
  }
  remove = () => {
    let { key } = this.state
    if (key !== null) {
      AsyncStorage.removeItem(key,(err) => {
        if (!err) {
          this.toast.show(`${key}已经删除`,DURATION.LENGTH_LONG)
        } else {
          this.toast.show(`${key}删除失败`,DURATION.LENGTH_LONG)
        }
      })
    }
  }
  onFetch = () => {
    let { key } = this.state
    if (key !== null) {
      AsyncStorage.getItem(key,(err,value) => {
        if(!err) {
          if(value == null) {
            this.toast.show(`${key}不存在`,DURATION.LENGTH_LONG)
            return
          }
          this.toast.show(`${key}数据为: ${value}`,DURATION.LENGTH_LONG)
        }else {
          this.toast.show(`取出失败,${err}`,DURATION.LENGTH_LONG)
        }
      })
      // AsyncStorage.
    } else {
      this.toast.show('请在键输入框里面输入你要取出的值',DURATION.LENGTH_LONG)
    }
  }
}

const styles = StyleSheet.create({})
