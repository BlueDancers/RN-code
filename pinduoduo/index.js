/** @format */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import store from './app/store'
import App from './app/routes/App'
import { name } from './app.json'

class Apps extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent(name, () => Apps)
