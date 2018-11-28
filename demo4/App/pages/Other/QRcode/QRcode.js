import React, { Component } from 'react'
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid 
} from 'react-native'
import { RNCamera } from 'react-native-camera'

export default class BadInstagramCloneApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes)
          }}
          onCameraReady={() => {
            console.log('打开相机事件')
          }}
          onBarCodeRead={e => {
            console.log(e)
            ToastAndroid.show("识别完成", ToastAndroid.SHORT);
          }}
        />
        <View
          style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}
        >
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
})






// import React, { Component } from 'react'
// import {
//   AppRegistry,
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   ToastAndroid 
// } from 'react-native'
// import { RNCamera } from 'react-native-camera'
// import QRView from './QRView'
// export default class QRcode extends Component {
//   constructor() {
//     super()
//     this.state = {
//       pageWidth: 0,
//       pageHeigth: 0
//     }
//   }
//   render() {
//     return (
//       <QRView
//         bottomMenuStyle={{
//           height: 120,
//           backgroundColor: '#000000',
//           opacity: 1
//         }}
//         isShowScanBar={true}
//         // scanBarImage={Images.ic_scan_bar}
//         cornerColor={'yellow'}
//         cornerOffsetSize={0}
//         borderWidth={0}
//         hintText={'请对准车牌上的二维码'}
//         hintTextStyle={{
//           color: 'red',
//           fontSize: 16,
//           fontWeight: 'bold'
//         }}
//         hintTextPosition={110}
//         maskColor={'rgba(0,0,0,0.4)'}
//         onScanResultReceived={this.barcodeReceived.bind(this)}
//         bottomMenuHeight={120}
//         // renderTopBarView={() => {
//         //   return (
//         //     <TitleBar
//         //       title={Constants.string_title_scanner_qrcode}
//         //       rightTitle={Constants.string_help}
//         //       leftIconPress={() => this.props.navigation.goBack()}
//         //     />
//         //   )
//         // }}
//         renderBottomMenuView={() => this._renderMenu()}
//       />
//       // <View
//       //   style={Styles.container}
//       //   onLayout={({ nativeEvent: e }) => {
//       //     this.setState({
//       //       pageWidth: e.layout.width,
//       //       pageHeigth: e.layout.height
//       //     })
//       //   }}
//       // >
//       //   {/* <View
//       //     style={[
//       //       Styles.Top,
//       //       {
//       //         width: this.state.pageWidth,
//       //         height: (this.state.pageHeigth / 7) * 2
//       //       }
//       //     ]}
//       //   />
//       //   <View
//       //     style={[
//       //       Styles.Bottom,
//       //       {
//       //         width: this.state.pageWidth,
//       //         height: (this.state.pageHeigth / 7) * 2
//       //       }
//       //     ]}
//       //   />
//       //   <View
//       //     style={[
//       //       Styles.Left,
//       //       {
//       //         width: this.state.pageWidth / 6,
//       //         height: (this.state.pageHeigth / 7) * 3,
//       //         top: (this.state.pageHeigth / 7) * 2
//       //       }
//       //     ]}
//       //   />
//       //   <View
//       //     style={[
//       //       Styles.Right,
//       //       {
//       //         width: this.state.pageWidth / 6,
//       //         height: (this.state.pageHeigth / 7) * 3,
//       //         top: (this.state.pageHeigth / 7) * 2
//       //       }
//       //     ]}
//       //   />
//       //   <View style={[Styles.Center, {
//       //     width: (this.state.pageWidth / 6) * 4,
//       //     height: (this.state.pageHeigth / 7) * 3,
//       //     marginLeft: (this.state.pageWidth / 6),
//       //     marginTop: (this.state.pageHeigth / 7) * 2
//       //   }]} /> */}
//       //   <RNCamera
//       //     ref={ref => {
//       //       this.camera = ref
//       //     }}
//       //     style={Styles.preview}
//       //     type={RNCamera.Constants.Type.back}
//       //     flashMode={RNCamera.Constants.FlashMode.on}
//       //     permissionDialogTitle={'使用相机'} // 权限对话标题
//       //     permissionDialogMessage={'需要你的许可才能使用相机'} //权限对话消息
//       //     onGoogleVisionBarcodesDetected={({ barcodes }) => {
//       //       console.log(barcodes)
//       //     }}
//       //     onBarCodeRead={result => {
//       //       // 检测到二维码 会执行这个函数
//       //       console.log(result)
//       //       // ToastAndroid.show("二维码识别完成", ToastAndroid.SHORT);
//       //     }}
//       //   />
//       //   <View
//       //     style={{ flex: 0, flexDirection: 'row', justifyContent: 'center',zIndex:100 }}
//       //   >
//       //     <TouchableOpacity
//       //       onPress={this.takePicture.bind(this)}
//       //       style={Styles.capture}
//       //     >
//       //       <Text style={{ fontSize: 14 }}> 拍照 </Text>
//       //     </TouchableOpacity>
//       //   </View>
//       // </View>
//     )
//   }
//   _renderMenu() {
//     return (
//       <View style={Styles.view_menu_container}>
//         <View style={Styles.view_menu_item_container}>
//           {/* <ImageButton
//             style={Styles.image_bottom_menu}
//             // source={Images.ic_manual_input}
//           /> */}
//           <Text style={Styles.text_menu_title}>手动输入车牌号</Text>
//         </View>

//         <View style={Styles.view_menu_item_container}>
//           {/* <ImageButton
//             style={Styles.image_bottom_menu}
//             source={Images.ic_light_off}
//           /> */}
//           <Text style={Styles.text_menu_title}>手电筒</Text>
//         </View>
//       </View>
//     )
//   }

//   barcodeReceived(e) {
//     console.log(e)

//     // if (this.state.parsingResult ) return;
//     //
//     // this.setState({
//     //     parsingResult: e.data,
//     // });
//   }
//   takePicture = async function() {
//     if (this.camera) {
//       const options = { quality: 0.5, base64: true }
//       const data = await this.camera.takePictureAsync(options)
//       console.log(data.uri)
//     }
//   }
// }

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black'
//   },
//   Top: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 10
//   },
//   Bottom: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 10
//   },
//   Left: {
//     position: 'absolute',
//     left: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 10
//   },
//   Right: {
//     position: 'absolute',
//     right: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 10
//   },
//   Center: {
//     position:'absolute',
//     zIndex: 10,
//     borderColor: 'black',
//     borderWidth: 3,
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20
//   },
//   image_bottom_menu: {
//     height: 50,
//     width: 50,
//     marginBottom: 10
//   },
//   view_menu_container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingTop: 16
//   },
//   text_menu_title: {
//     color: 'white',
//     fontSize: 14
//   },
//   view_menu_item_container: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })
