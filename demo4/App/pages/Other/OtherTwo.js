import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import ImagePickerPlus from 'react-native-image-crop-picker'

var options = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class OtherTwo extends Component {
  render() {
    return (
      <View>
        <Text> OtherTwo </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack()
          }}
        >
          <Text>跳转到One页面</Text>
        </TouchableOpacity>
        <Button
          title="添加图片"
          onPress={() => {
            this.cameraAction()
          }}
        />
        <Button
          title="可以裁剪的添加图片"
          onPress={() => {
            this.camerActions()
          }}
        />
        <Button
          title="选取多张图片"
          onPress={() => {
            this.camerAllActions()
          }}
        />
      </View>
    )
  }
  cameraAction = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response) // 图片的回调信息

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri }

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        })
      }
    })
  }
  camerActions = () => {
    ImagePickerPlus.openPicker({
      width: 300,
      height: 410,
      cropping: true
    }).then(image => {
      console.log(image)
    })
  }
  camerAllActions = () => {
    ImagePickerPlus.openPicker({
      hideBottomControls: false,
      multiple: true
    }).then(images => {
      console.log(images)
    })
  }
}

const styles = StyleSheet.create({})
