import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeNavigator } from './HomeNavigator';
import { NotificationNavigator } from './NotificationNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { SearchNavigator } from './SearchNavigator';
// import { createBottomTabNavigator } from 'react-navigation';

export const MainNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: 'Home'
      },
    },
    SearchNavigator: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: 'Search'
      },
    },
    NotificationNavigator: {
      screen: NotificationNavigator,
      navigationOptions: {
        tabBarLabel: 'Notifications'
      },
    },
    ProfileNavigator: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarLabel: 'Profile'
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);