import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  Platform,
  NativeModules
} from 'react-native';

import {
  StackNavigator,
  NavigationActions
} from 'react-navigation';

const splash = require('../assets/img/splash.png');

export default class Splash  extends Component {

  static navigationOptions = {
     header:null
  }

  componentDidMount() {
	  window.setTimeout( () => {
		  this.setTimePassed();
	  }, 3000);
  }

  setTimePassed() {
	const resetAction = NavigationActions.reset({
		index: 0,
		actions: [NavigationActions.navigate({ routeName: 'OnBoarding'})]
	   })
	 this.props.navigation.dispatch(resetAction)
 }


	render(){
		return(
			<View>
			<Image source={splash} style={{height: null, width: null}}/>
			</View>
			);
	}

}