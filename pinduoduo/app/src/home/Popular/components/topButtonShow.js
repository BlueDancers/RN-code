import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
class TopButtonShow extends Component {
  render() {
    if (this.props.isTopButton) {
      return (
        <View style={styles.container}>
          <TouchableHighlight style={styles.TopButtom} onPress={this.props.gotoTop}>
            <View>
              <Image
                style={styles.TopButtomImg}
                source={require('../../../../public/images/Home/Popular/topbuttom.png')}
              />
              <Text style={styles.TopButtomText}>顶部</Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    } else {
      return <View />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TopButtom: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'rgba(220,220,220, 0.6)'
  },
  TopButtomImg: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  TopButtomText: {
    fontSize: 12,
    textAlign: 'center'
  }
})

const mapState = state => {
  return {
    isTopButton: state.homePopular.get('isTopButton')
  }
}

export default connect(
  mapState,
  null
)(TopButtonShow)
