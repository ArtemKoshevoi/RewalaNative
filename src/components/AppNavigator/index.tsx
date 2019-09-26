import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import LoginScreen from './AuthNavigator/LoginScreen';
// import RegistrationScreen from './AuthNavigator/RegistrationScreen';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';

const Navigator = createSwitchNavigator(
  {
    AuthNavigator,
    MainNavigator,
  },
  {
    initialRouteName: 'AuthNavigator',
  },
);

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
    headerMode: 'screen',
  },
);

export const AppContainer = createAppContainer(RootStack);