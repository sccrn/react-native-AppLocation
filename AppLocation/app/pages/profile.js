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



export default class Profile extends Component {
	static navigationOptions = {
		title: 'Rádio Hits',
		headerTintColor: '#164194',
		headerStyle: {
			backgroundColor: '#FFDD00',
		},


	};

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this._panResponder = PanResponder.create({
			// Ask to be the responder:
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			//onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

			onPanResponderGrant: (evt, gestureState) => {
				// The gesture has started. Show visual feedback so the user knows
				// what is happening!

				// gestureState.d{x,y} will be set to zero now
			},
			onPanResponderMove: (evt, gestureState) => {
				// The most recent move distance is gestureState.move{X,Y}

				// The accumulated gesture distance since becoming responder is
				// gestureState.d{x,y}
			},
			onPanResponderTerminationRequest: (evt, gestureState) => true,
			onPanResponderRelease: (evt, gestureState) => {
				// The user has released all touches while this view is the
				// responder. This typically means a gesture has succeeded
			},
			onPanResponderTerminate: (evt, gestureState) => {
				// Another component has become the responder, so this gesture
				// should be cancelled
			},
			onShouldBlockNativeResponder: (evt, gestureState) => {
				// Returns whether this component should block native components from becoming the JS
				// responder. Returns true by default. Is currently only supported on android.
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
