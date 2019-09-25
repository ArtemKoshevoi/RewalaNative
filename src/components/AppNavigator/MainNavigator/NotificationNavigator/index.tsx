import { createStackNavigator } from 'react-navigation-stack';
import NotificationScreen from './NotificationScreen';

export const NotificationNavigator = createStackNavigator(
  {
    NotificationScreen: {
      screen: NotificationScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'NotificationScreen',
    headerMode: 'screen',
  },
);