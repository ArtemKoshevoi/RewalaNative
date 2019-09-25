/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { NavigationContainerComponent } from 'react-navigation';
import { Provider } from 'react-redux';
import navService from '../shared/services/nav.service';
import store from '../store';
import { AppContainer } from './AppNavigator';

const App: React.FC = () => {
  const setNavigator = (navigatorRef: NavigationContainerComponent) => {
    navService.setNavigator(navigatorRef);
  };

  return (
    <Provider store={store}>
      <AppContainer ref={setNavigator}/>
    </Provider>
  )
};


export default App;

