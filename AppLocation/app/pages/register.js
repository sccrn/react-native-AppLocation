import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	PanResponder,
	TouchableHighlight,
} from 'react-native';

import {
	Container,
	Content,
	Item,
	Button,
	Footer,
	FooterTab,
} from 'native-base';

import {
	NavigationActions
} from 'react-navigation';




export default class Register extends Component {
	static navigationOptions = {
		title: 'CADASTRO',
		headerTintColor: '#FFFFFF',
		headerStyle: {
			backgroundColor: '#B72E33',
		},


	};

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: (evt, gestureState) => { },
			onPanResponderMove: (evt, gestureState) => { },
			onPanResponderTerminationRequest: (evt, gestureState) => true,
			onPanResponderRelease: (evt, gestureState) => { },
			onPanResponderTerminate: (evt, gestureState) => { },
			onShouldBlockNativeResponder: (evt, gestureState) => {
				return true;
			},
		});
	}
	
	render() {

		const { navigate } = this.props.navigation;

		return (
			<View>
			</View>
		);


	}
}
