import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  NavigationTabProp,
} from 'react-navigation-tabs';
import Movies from '../../screens/Movies';
import TvSeries from '../../screens/TvSeries';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TabNavigatorProps {}

const TabNavigator: React.FC<TabNavigatorProps> = () => {
  return <AppNavigator />;
};

const moviesStack = createStackNavigator(
  {
    Movies: {
      screen: Movies,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: '#3e3e3e',
        },
      }),
    },
  },
  {headerMode: 'none'},
);

const tvSeriesStack = createStackNavigator(
  {
    Tv_Series: {
      screen: TvSeries,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: '#3e3e3e',
        },
      }),
    },
  },
  {headerMode: 'none'},
);

const getTabBarIcon = (
  navigation: NavigationTabProp,
  focused: boolean,
  tintColor: string | undefined,
) => {
  const {routeName} = navigation.state;
  let IconComponent = Icon;
  switch (routeName) {
    case 'Movies':
      return <IconComponent name="filmstrip" size={30} color={tintColor} />;
    case 'Tv Series':
      return (
        <IconComponent name="television-classic" size={30} color={tintColor} />
      );
    default:
      return null;
  }
};

const tabNavigator = createBottomTabNavigator(
  {
    Movies: {screen: moviesStack},
    ['Tv Series']: {screen: tvSeriesStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#01D277',
      inactiveTintColor: '#fefefe',
      style: {
        backgroundColor: '#000000',
        height: 65,
      },
    },
    resetOnBlur: true,
    initialRouteName: 'Movies',
  },
);

const AppNavigator = createAppContainer(tabNavigator);

export default TabNavigator;
