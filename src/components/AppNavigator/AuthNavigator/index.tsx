import { createStackNavigator } from 'react-navigation';

import { ConfirmLoginScreen } from './ConfirmLoginScreen';
import { LoginScreen } from './LoginScreen';

export const AuthNavigator = createStackNavigator(
  {
    LoginScreen,
    ConfirmLoginScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
  },
);
