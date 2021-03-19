/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './src/AppContainer';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';

const Application = () => {
  return <Provider store={store}>
      <AppContainer />
    </Provider>;
};

AppRegistry.registerComponent(appName, () => Application);
