import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native'

class menu extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width
    let { barList, activityPhoto } = this.props
    return (
      <View style={{ backgroundColor: '#FC316E', height: 240 }}>
        <ScrollView
          style={[styles.scroll, { width: screenWidth - 10 }]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {barList.map((item, index) => {
            return (
              <View key={index} style={styles.listItem}>
                {item.map((i, x) => {
                  return (
                    <View style={styles.listICon} key={x}>
                      <Image style={styles.ListsImg} source={i.get('img')} />
                      <Text style={styles.ListText}>{i.get('text')}</Text>
                    </View>
                  )
                })}
              </View>
            )
          })}
        </ScrollView>
        <View style={[styles.activity, { width: screenWidth }]}>
          <Image
            style={[styles.activityImg, { width: screenWidth }]}
            source={activityPhoto}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  listItem: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 30
  },
  listICon: {
    width: 60,
    height: 58,
    justifyContent: 'center',
    alignContent: 'center'
  },
  ListsImg: {
    marginLeft: 10,
    width: 40,
    height: 40
  },
  ListText: {
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 0,
    paddingBottom: 0
  },
  activity: {
    height: 100,
    position: 'absolute',
    bottom: 0
  },
  activityImg: {
    height: 100
  }
})

const mapState = state => {
  return {
    barList: state.homePopular.get('barList'),
    activityPhoto: state.homePopular.get('activityPhoto')
  }
}

export default connect(
  mapState,
  null
)(menu)
