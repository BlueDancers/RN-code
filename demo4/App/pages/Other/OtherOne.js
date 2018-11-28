import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity ,Button} from 'react-native'

export default class OtherOne extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }
  render() {
    return (
      <View>
        <Text> OtherOne </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('OtherTwo')
          }}
        >
          <Text>跳转到Two页面</Text>
        </TouchableOpacity>
        <Button title="打开二维码" onPress={()=> {
          this.props.navigation.navigate('QRcode')
        }}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
