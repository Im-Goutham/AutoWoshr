import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VerifyPhoneNumber from '../screens/VerifyPhoneNumber';
import UpdatePhoneNumber from '../screens/UpdatePhoneNumber';
import SelectCarScreen from '../screens/SelectCarScreen';
import SelectLocationScreen from '../screens/SelectLocationScreen';
import ChatScreen from '../screens/ChatScreen';
import AppDrawerNavigator from './AppDrawerNavigator';


export default StackNavigator(
  {
    main: {
      screen: MainScreen,
    },
    login: {
      screen: LoginScreen,
    },
    signup: {
      screen: SignUpScreen,
    },
    home : {
      screen: AppDrawerNavigator
    },
    verifyPhoneNumber : {
      screen: VerifyPhoneNumber
    },
    updatePhoneNumber : {
      screen: UpdatePhoneNumber
    },
    selectCarScreen : {
      screen: SelectCarScreen
    },
    selectLocationScreen: {
      screen: SelectLocationScreen
    },
    chatScreen:  {
      screen: ChatScreen
    }
      },{
        index: 0,
        initialRouteName: 'main',
        headerMode: 'none',
        navigationOptions: {
        gesturesEnabled: false
    }}
);
