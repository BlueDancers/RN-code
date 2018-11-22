import React, { Component } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
      {/* 
        SectionList 适用于渲染分组数据
        例如 省市区组件
      */}
        <SectionList
          sections={[
            { title: 'D', data: ['Devin'] },
            {
              title: 'J',
              data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie'
              ]
            }
          ]}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
