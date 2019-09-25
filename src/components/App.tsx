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
import { Provider } from 'react-redux';
import { AppContainer } from './AppNavigator';
import store from '../store';
import { NavigationContainerComponent } from "react-navigation";
import navService from '../shared/services/nav.service';

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

