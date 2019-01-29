import React from 'react'
import { Image } from 'react-native'
import { TabIcon } from './Image'

const Icon = ({ name, style, size }) => {
  const icon = TabIcon[name]
  return (
    <Image
      source={icon}
      style={[{ width: size, height: size }, style]}
    />
  )
}

export default Icon
