import React from 'react';
import { TabNavigator, StackNavigator , DrawerNavigator} from 'react-navigation';
import { Icon } from 'native-base';

import SideMenu from '../components/SideMenu';

import HomeScreen from '../screens/HomeScreen';
import BookingsScreen from '../screens/BookingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ContactScreen from '../screens/ContactScreen';
import PrivacyScreen from '../screens/PrivacyScreen';


//import AccountStackNavigator from './AccountStackNavigator';

export default DrawerNavigator({
    homePage: {
        screen: HomeScreen
     },
    bookings: {
       screen: BookingsScreen
     },
    profile: {
       screen: ProfileScreen
     },
    contact: {
       screen: ContactScreen
     },
    privacy: {
       screen: PrivacyScreen
   }
},{
    contentComponent: SideMenu,
    drawerWidth: 300
});
