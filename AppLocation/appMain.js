import React from 'react';
import { 
    AppRegistry,
    Platform,
 } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Splash from './app/pages/splash'
import OnBoarding from './app/pages/onBoarding'
import Login from './app/pages/login'
import Register from './app/pages/register'
import ForgotPassword from './app/pages/forgotPassword'
import Home from './app/pages/home'
import Profile from './app/pages/profile'
import EditProfile from './app/pages/editProfile'
import MyLocal from './app/pages/myLocal'
import NewLocal from './app/pages/newLocal'

var AppLocation;

if (Platform.OS == 'android') {
    AppLocation = StackNavigator({
        Splash: { screen: Splash },
        OnBoarding: { screen: OnBoarding },
        Login: { screen: Login },
        Register: { screen: Register },
        ForgotPassword: { screen: ForgotPassword },
        Home: { screen: Home },
        Profile: { screen: Profile },
        EditProfile: { screen: EditProfile },
        MyLocal: { screen: MyLocal },
        NewLocal: { screen: NewLocal },

    });
} else {
    AppLocation = StackNavigator({
        OnBoarding: { screen: OnBoarding },
        Login: { screen: Login },
        Register: { screen: Register },
        ForgotPassword: { screen: ForgotPassword },
        Home: { screen: Home },
        Profile: { screen: Profile },
        EditProfile: { screen: EditProfile },
        MyLocal: { screen: MyLocal },
        NewLocal: { screen: NewLocal },

    });
}



AppRegistry.registerComponent('AppLocation', () => AppLocation);