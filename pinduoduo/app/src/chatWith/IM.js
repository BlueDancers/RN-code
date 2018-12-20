import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  NativeModules,
  Dimensions,
  Platform
} from 'react-native'
import IMUI from 'aurora-imui-react-native'
const window = Dimensions.get('window')
var MessageList = IMUI.MessageList
var ChatInput = IMUI.ChatInput
const AuroraIMUIController = IMUI.AuroraIMUIController // the IMUI controller, use it to operate  messageList and ChatInput.
const AuroraIMUIModule = NativeModules.AuroraIMUIModule
export default class IM extends Component {
  constructor() {
    super()
    this.state = {
      talktime: '',
      inputLayoutHeight: 100,
      isDismissMenuContainer: false,
      messageListLayout: { flex: 1, width: window.width, margin: 0 },
      chatInputStyle: { width: window.width, height: 100 }
    }
  }
  componentDidMount() {
    if (Platform.OS === 'android') {
      this.refs['ChatInput'].setMenuContainerHeight(316)
    }
  }
  constructNormalMessage() {
    let message = {
      msgId: '1',
      status: 'send_succeed',
      isOutgoing: true,
      fromUser: {
        userId: '1',
        displayName: '我',
        avatarPath:
          'http://www.todaypocket.cn/todaypocket/static/img/xiaobing.bed8477.png'
      },
      timeString: ''
    }

    return message
  }
  appendinfo(text, userid, isOutgoing, name) {
    let date = new Date()
    let time = date
    let oldtime = new Date(
      Date.parse(this.state.talktime.replace(/-/g, '/'))
    ).getTime()
    let difftime = date.getTime() - oldtime
    if ((difftime > 60000 && userid == '1') || this.state.talktime == '') {
    } else {
      time = ''
    }
    let messages = [
      {
        msgId: userid,
        status: 'send_succeed',
        msgType: 'text',
        text: text,
        isOutgoing: isOutgoing,
        fromUser: {
          userId: userid,
          displayName: name || '我',
          avatarPath:
            userid == '1'
              ? 'images'
              : 'http://www.todaypocket.cn/todaypocket/static/img/xiaobing.bed8477.png'
        },
        timeString: time
      }
    ]
    console.log(messages)
    AuroraIMUIController.appendMessages(messages)
  }
  fetchData(text, userid) {
    var params = {
      info: text,
      userid: userid
    }
    api_get_tuling_bot(params)
      .then(responseJson => {
        console.log(responseJson)
        this.appendinfo(responseJson.text, userid, false, '问问')
      })
      .catch(error => {
        console.log('请求')
      })
  }
  //展示消息到屏幕上
  showinfo = text => {
    console.log(text)
    this.appendinfo(text, '1', true)
    // this.fetchData(text, '2')
  }
  //底部表情等菜单改变时
  onInputViewSizeChange = size => {
    console.log(size)
    console.log(
      'onInputViewSizeChange height: ' + size.height + ' width: ' + size.width
    )
    if (this.state.inputLayoutHeight != size.height) {
      this.setState({
        inputLayoutHeight: size.height,
        chatInputStyle: {
          width: window.width,
          height: size.height < 100 ? 100 : size.height
        },
        messageListLayout: { flex: 1, width: window.width, margin: 0 }
      })
    }
  }
  onFullScreen = () => {
    console.log('on full screen')
    this.setState({
      messageListLayout: { flex: 0, width: 0, height: 0 },
      inputViewLayout: { flex: 1, width: window.width, height: window.height },
      navigationBar: { height: 0 }
    })
  }
  //点击消息气泡触发
  onMsgClick() {
    console.log('点击消息气泡触发')
  }
  //长按消息
  onMsgLongClick() {
    console.log('长按消息')
  }
  //点击头像
  onAvatarClick() {
    console.log('点击头像')
  }
  //点击消息状态按钮
  onStatusViewClick() {
    console.log('点击消息状态按钮')
  }
  //点击消息列表
  onTouchMsgList() {
    console.log('点击消息列表')
  }
  //滚动MessageList到顶部时，下拉触发
  onPullToRefresh() {
    console.log('滚动MessageList到顶部时，下拉触发')
  }
  //输入文字后发送
  onSendText = text => {
    console.log('输入文字', text)
    this.showinfo(text)
  }
  //选中视频或图片后点击发送
  onSendGalleryFiles = mediaFiles => {
    console.log('选中视频或图片后点击发送')
    for (index in mediaFiles) {
      var message = this.constructNormalMessage()
      if (mediaFiles[index].mediaType == 'image') {
        message.msgType = 'image'
        message.mediaPath = mediaFiles[index].mediaPath
      } else {
        message.msgType = 'video'
        message.duration = mediaFiles[index].duration
      }

      AuroraIMUIController.appendMessages([message])
      AuroraIMUIController.scrollToBottom(false)
    }
  }
  //点击拍照按钮
  onTakePicture() {
    console.log('点击拍照按钮')
  }
  //点击录制视频按钮
  onStartRecordVideo() {
    console.log('点击录制视频按钮')
  }
  //完成录制视频
  onFinishRecordVideo() {
    console.log('完成录制视频')
  }
  //取消录制视频
  onCancelRecordVideo() {
    console.log('完成录制视频')
  }
  //点击录音按钮
  onStartRecordVoice() {
    console.log('点击录音按钮')
  }
  //录音完成后松开手指
  onCancelRecordVoice() {
    console.log('录音完成后松开手指')
  }
  //点击菜单栏麦克风按钮
  onSwitchToMicrophoneMode() {
    console.log('点击菜单栏麦克风按钮')
    // AuroraIMUIModule.scrollToBottom(false)
  }
  //点击表情
  onSwitchToEmojiMode() {
    console.log('点击表情')
    AuroraIMUIModule.scrollToBottom(true)
  }
  //点击菜单栏图片按钮
  onSwitchToGalleryMode() {
    console.log('点击菜单栏图片按钮')
    AuroraIMUIModule.scrollToBottom(true)
  }
  //点击菜单栏拍照按钮
  onSwitchToCameraMode() {
    console.log('点击菜单栏拍照按钮')
    AuroraIMUIModule.scrollToBottom(true)
  }
  //点击输入框
  onTouchEditText = () => {
    console.log('点击输入框')
    this.setState({
      messageListLayout: { flex: 1, width: window.width, margin: 0 },
      chatInputStyle: { width: window.width, height: 100 }
    })
  }
  render() {
    return (
      <View style={styles.containers}>
        <MessageList
          style={this.state.messageListLayout}
          onMsgClick={this.onMsgClick}
          onMsgLongClick={this.onMsgLongClick}
          onAvatarClick={this.onAvatarClick}
          onStatusViewClick={this.onStatusViewClick}
          onTouchMsgList={this.onTouchMsgList}
          onPullToRefresh={this.onPullToRefresh}
          sendBubble={{ imageName: 'send_msg', padding: 10 }}
          receiveBubbleTextColor={'#ffffff'}
          isShowOutgoingDisplayName={true}
          sendBubbleTextSize={18}
          receiveBubbleTextSize={14}
          sendBubblePressedColor={'#dddddd'}
        />
        <ChatInput
          ref="ChatInput"
          style={this.state.chatInputStyle}
          isDismissMenuContainer={this.state.isDismissMenuContainer}
          onSendText={this.onSendText}
          onSendGalleryFiles={this.onSendGalleryFiles}
          onTakePicture={this.onTakePicture}
          onStartRecordVideo={this.onStartRecordVideo}
          onFinishRecordVideo={this.onFinishRecordVideo}
          onCancelRecordVideo={this.onCancelRecordVideo}
          onStartRecordVoice={this.onStartRecordVoice}
          onFinishRecordVoice={this.onFinishRecordVoice}
          onCancelRecordVoice={this.onCancelRecordVoice}
          onSwitchToEmojiMode={this.onSwitchToEmojiMode}
          onSwitchToMicrophoneMode={this.onSwitchToMicrophoneMode}
          onSwitchToGalleryMode={this.onSwitchToGalleryMode}
          onSwitchToCameraMode={this.onSwitchToCameraMode}
          onTouchEditText={this.onTouchEditText}
          onSizeChange={this.onInputViewSizeChange}
          onFullScreen={this.onFullScreen}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFCCCC',
    justifyContent: 'center'
    // alignItems: 'center'
  },
  chatInput: {
    flex: 1
    // position: 'absolute',
    // // top: 100,
    // // left: 0,
    // // bottom: 100
  }
})
