import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './AuthNavigator/LoginScreen';
import RegistrationScreen from './AuthNavigator/RegistrationScreen';

const RootStack = createStackNavigator ({
  Login: {
    screen: LoginScreen,
  },

  Registration: {
    screen: RegistrationScreen,
  },
},
  {
    initialRouteName: 'Login'
  });

export const AppContainer = createAppContainer(RootStack);