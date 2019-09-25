import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './SearchScreen';

export const SearchNavigator = createStackNavigator(
  {
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SearchScreen',
    headerMode: 'screen',
  },
);