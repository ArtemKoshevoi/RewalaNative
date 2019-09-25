import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './AuthNavigator/LoginScreen';
import RegistrationScreen from './AuthNavigator/RegistrationScreen';
import { AuthNavigator } from './AuthNavigator';

const Navigator = createSwitchNavigator(
  {
    AuthNavigator,
  },
  {
    initialRouteName: 'AuthNavigator',
  },
);

// const Navigator = createSwitchNavigator ({
//   Login: {
//     screen: LoginScreen,
//   },
//
//   Registration: {
//     screen: RegistrationScreen,
//   },
// },
//   {
//     initialRouteName: 'Login'
//   });

const RootStack = createStackNavigator(
  {
    Navigator: {
      screen: Navigator,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'screen',
  },
);

export const AppContainer = createAppContainer(RootStack);