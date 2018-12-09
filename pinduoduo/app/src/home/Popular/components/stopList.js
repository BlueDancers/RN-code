import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableNativeFeedback
} from 'react-native'

// 获取当前设备宽度
let width = Dimensions.get('window').width

class stopList extends Component {
  render() {
    console.log(this.props.stopList)
    let { stopList } = this.props
    return (
      <View>
        {stopList.map((e, index) => (
          <TouchableNativeFeedback
            key={index}
            onPress={() => {
              this.props.gotoDetails(e.get('title'))
            }}
          >
            <View style={[styles.conatiner, { width: width - 10 }]}>
              {/* 商品图片 */}
              <View style={styles.left}>
                <Image style={styles.leftImg} source={e.get('img')} />
              </View>
              {/* 商品信息 */}
              <View style={styles.right}>
                {/* 商品信息标题 */}
                <View style={styles.rightTop}>
                  <Image
                    style={styles.icon}
                    source={require('../../../../public/images/Home/Popular/896a52a854723aa5f4e0406d9b7149e1.png')}
                  />
                  <Text
                    style={styles.Toptext}
                    selectable={true}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                  >         {e.get('title')}
                  </Text>
                </View>
                {/* 不一定有的店名 */}
                <Text style={styles.StoreName}>{e.get('stop')}</Text>
                {/* 商品信息 信息 */}
                <View style={styles.rightBottom}>
                  <View style={styles.rightSpan}>
                    {e.get('span').map(span => (
                      <Text key={span} style={styles.rightSpanText}>
                        {span}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.rightPrice}>
                    <Text style={styles.price}>${e.get('price')}</Text>
                    {shopNum(e.get('num'))}
                  </View>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
    )
    function shopNum(num) {
      if (num < 10000) {
        return <Text>已拼{num}件</Text>
      } else if (num >= 10000 && num < 100000) {
        return <Text>已拼{num / 10000}万件</Text>
      } else if (num >= 100000) {
        return <Text>已拼10万+件</Text>
      }
    }
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 5,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  left: {
    height: 140
  },
  leftImg: {
    marginLeft: 5,
    marginTop: 5,
    height: 130,
    width: 130
  },
  rightTop: {
    flexDirection: 'row',
    marginTop: 10
  },
  icon: {
    position: 'absolute',
    top: 3,
    width: 30,
    height: 15,
    marginLeft: 8,
    marginRight: 8
  },
  Toptext: {
    paddingLeft: 10,
    lineHeight: 20,
    paddingRight: 10,
    width: width - 140
  },
  StoreName: {
    marginLeft: 10,
    color: '#9c9c9c'
  },
  rightBottom: {},
  rightSpan: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30
  },
  rightSpanText: {
    backgroundColor: 'rgba(255, 87, 6, 0.08)',
    color: 'rgb(255, 87, 6)',
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 3,
    paddingRight: 3
  },
  rightPrice: {
    flexDirection: 'row',
    position: 'absolute',
    top: 50
  },
  price: {
    paddingLeft: 10,
    paddingRight: 10,
    color: '#e02e24',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

const mapState = state => {
  return {
    stopList: state.homePopular.get('stopList')
  }
}

export default connect(
  mapState,
  null
)(stopList)
