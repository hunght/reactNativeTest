// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import reducers from './configs/configReducers';
import thunk from 'redux-thunk';
import { compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import App from './app/AppContainer';
import ProfileScreen from './components/ProfileScreen';
import type { Store } from './types';
import { StackNavigator } from 'react-navigation';

const BasicApp = StackNavigator({
  Main: {
    screen: App,
    navigationOptions: {
      title: 'Home'
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Person'
    }
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

const FirstDigitalBank = () => (
  <Provider store={store}>
    <BasicApp />
  </Provider>
);

AppRegistry.registerComponent('inkittChapterReading', () => FirstDigitalBank);
