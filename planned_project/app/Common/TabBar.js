import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions
} from 'react-native'
import posed from 'react-native-pose' // react-native 动画库

const windowWidth = Dimensions.get('window').width
const tabWidth = windowWidth / 5
const SpotLight = posed.View({
  route0: { x: 0 },
  route1: { x: tabWidth },
  route2: { x: tabWidth * 2 },
  route3: { x: tabWidth * 3 },
  route4: { x: tabWidth * 4 }
})

const Scaler = posed.View({
  active: { scale: 1 },
  inactive: { scale: 0.9 }
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
  console.log(routes)

  return (
    <Scaler style={Styles.container}>
      {/* 悬浮动画层 */}

      <View style={StyleSheet.absoluteFillObject}>
        {/* <SpotLight style={Styles.spotLight} pose={`route${activeRouteIndex}`}>
          <View style={Styles.spotLightInner} />
        </SpotLight> */}
      </View>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor
        return (
          <TouchableNativeFeedback
            key={routeIndex}
            style={Styles.tabButton}
            onPress={() => {
              onTabPress({ route })
            }}
            onLongPress={() => {
              onTabLongPress({ route })
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {route.key == 'three' ? (
              <Scaler
                style={Styles.scalerOnline}
                pose={isRouteActive ? 'active' : 'inactive'}
              >
                {renderIcon({ route, focused: isRouteActive, tintColor })}
                <Text style={Styles.iconText}>{getLabelText({ route })}</Text>
              </Scaler>
            ) : (
              <Scaler
                style={Styles.scaler}
                pose={isRouteActive ? 'active' : 'inactive'}
              >
                {renderIcon({ route, focused: isRouteActive, tintColor })}
                <Text style={Styles.iconText}>{getLabelText({ route })}</Text>
              </Scaler>
            )}
          </TouchableNativeFeedback>
        )
      })}
    </Scaler>
  )
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 53,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#EEEEEE',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.75,
    elevation: 1
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
  scaler: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scalerOnline: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconText: {
    fontSize: 12,
    lineHeight: 20
  }
})

export default TabBar
