import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {RootBottomTabList} from './types';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppIcon} from '../components/app-elements/AppIcon';
import AppHeader from '../components/app-elements/AppHeader';
import Home from '../screens/Home';

const Navigation = () => {
  const RootTab = createBottomTabNavigator<RootBottomTabList>();

  const DefaultScreen = () => {
    return (
      <SafeAreaView>
        <AppHeader home />
        <Text style={{color: 'red', fontSize: 20}}>Home</Text>
      </SafeAreaView>
    );
  };

  const tabIcons = {
    Home: {
      default: 'home-variant-outline',
      focused: 'home-variant',
    },
    Search: {
      default: 'magnify',
      focused: 'magnify',
    },
    Tickets: {
      default: 'ticket-outline',
      focused: 'ticket',
    },
    Profile: {
      default: 'account-box-outline',
      focused: 'account-box',
    },
  } satisfies Record<string, {default: string; focused: string}>;
  return (
    <NavigationContainer>
      <RootTab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, focused, size}) => {
            return (
              <AppIcon
                name={
                  focused
                    ? tabIcons[route.name].focused
                    : tabIcons[route.name].default
                }
                color={color}
                size={size}
              />
            );
          },
        })}>
        <RootTab.Screen name="Home" component={Home} />
        <RootTab.Screen name="Search" component={DefaultScreen} />
        <RootTab.Screen name="Tickets" component={DefaultScreen} />
        <RootTab.Screen name="Profile" component={DefaultScreen} />
      </RootTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
