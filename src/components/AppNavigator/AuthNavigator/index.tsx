import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import { createStackNavigator } from 'react-navigation-stack';

export const AuthNavigator = createStackNavigator(
  {
    LoginScreen,
    RegistrationScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
  },
);
