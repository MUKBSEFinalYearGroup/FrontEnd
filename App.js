import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './components/Routes'

class YoChatComponent extends Component {
  render() {
      return (
        <Routes />
      )
  }
}
export default YoChatComponent
AppRegistry.registerComponent('YoChatComponent', () => YoChatComponent)