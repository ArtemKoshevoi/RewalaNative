import HomeScreen from './HomeScreen';
import { createStackNavigator } from 'react-navigation-stack';

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