import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

export const HomeNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'screen',
  },
);