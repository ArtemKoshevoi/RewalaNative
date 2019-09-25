import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';

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
