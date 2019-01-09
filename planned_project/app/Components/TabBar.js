import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native'
import posed from 'react-native-pose'

// 参考文档 https://dev.to/hrastnik/lets-create-a-custom-animated-tab-bar-with-react-native-3496

const windowWidth = Dimensions.get('window').width
const tabWidth = windowWidth / 4
const SpotLight = posed.View({
  route0: { x: 0 },
  route1: { x: tabWidth },
  route2: { x: tabWidth * 2 },
  route3: { x: tabWidth * 3 }
})

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    elevation: 2
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spotLight: {
    width: tabWidth,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spotLightInner: {
    width: 48,
    height: 48,
    backgroundColor: '#ee0000',
    borderRadius: 24
  },
  scaler: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

const Scaler = posed.View({
  active: { scale: 1.25 },
  inactive: { scale: 1 }
})

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props

  const { routes, index: activeRouteIndex } = navigation.state
  // StatusBar.setTranslucent(true)
  return (
    <View style={S.container}>
      {/* 悬浮动画层 */}
      <View style={StyleSheet.absoluteFillObject}>
        <SpotLight style={S.spotLight} pose={`route${activeRouteIndex}`}>
          <View style={S.spotLightInner} />
        </SpotLight>
      </View>

      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route })
            }}
            onLongPress={() => {
              onTabLongPress({ route })
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            <Scaler
              style={S.scaler}
              pose={isRouteActive ? 'active' : 'inactive'}
            >
              {renderIcon({ route, focused: isRouteActive, tintColor })}
            </Scaler>

            {/* <Text>{getLabelText({ route })}</Text> */}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TabBar
