/* eslint-disable no-sequences */
/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Main() {
  return (
    <PaperProvider
      settings={{
        icon: props => <MaterialIcons {...props} />,
      }}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

//AppRegistry.registerComponent(appName, () => App);
