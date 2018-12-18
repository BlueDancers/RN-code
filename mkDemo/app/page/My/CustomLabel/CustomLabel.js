import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { config, initData } from '../../../utils/initData'
import CheckBox from 'react-native-check-box'
export default class CustomLabel extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: '#fff', paddingRight: 10, fontSize: 16 }}>
            保存
          </Text>
        </TouchableOpacity>
      )
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    initData(config.pupdata).then(data => {
      this.setState(
        {
          data: JSON.parse(data)
        },
        () => {
          this.state.data.forEach(e => {
            console.log(e.name)
          })
        }
      )
    })
  }
  render() {
    return <ScrollView style={styles.scroll}>{this.renderView()}</ScrollView>
  }
  renderView = () => {
    let { data } = this.state
    if (!data || data.length == 0) return null
    let len = data.length
    let views = []
    for (let i = 0, l = len - 2; i <= l; i += 2) {
      views.push(
        <View key={i}>
          <View style={styles.item}>
            {this.rednerCheckBox(data[i])}
            {this.rednerCheckBox(data[i + 1])}
          </View>
          <View style={styles.line} />
        </View>
      )
    }
    return views
  }
  rednerCheckBox(data) {
    let leftText = data.name
    return (
      <CheckBox
        style={{ flex: 1 }}
        isChecked={data.checked}
        onClick={() => this.onClick(data)}
        leftText={leftText}
        checkedImage={
          <Image
            style={styles.image}
            source={require('../../../public/check.png')}
          />
        }
        unCheckedImage={
          <Image
            style={styles.image}
            source={require('../../../public/uncheck.png')}
          />
        }
      />
    )
  }
  onClick(checked) {
    let data = this.state.data
    data.map(e => {
      if(e.name == checked.name) {
        e.checked = !e.checked
      }
    })
    this.setState({
      data
    })
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35
  },
  line: {
    height: 1,
    backgroundColor: 'black'
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 20,
``  }
})
