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

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { Sae } from 'react-native-textinput-effects';

import styles from '../style/loginStyle';

var ButtonComponent = require('./../components/buttonComponent');

export default class Login extends Component {
	static navigationOptions = {
		headerBackTitle: null,
		headerTintColor: '#FFFFFF',
		title: 'LOGIN',
		headerStyle: {
			backgroundColor: '#AD343E',
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
			<Image source={require('../assets/img/background.png')}  style={StyleSheet.flatten(styles.backgroundImage)}>
        		<View style={StyleSheet.flatten(styles.viewBackground)} {...this._panResponder.panHandlers}>
						<Sae
							style={{ margin: 20, height:10, width:null, flex: 3 }}
							label={'username'}
							iconClass={FontAwesomeIcon}
							iconName={'pencil'}
							iconColor={'#000000'}
							iconSize={20}
							labelStyle={{ color: '#7C7C7C' }}
							inputStyle={{ color: '#7C7C7C' }}
						/>
						<Sae
							style={{ margin: 20, flex: 1}}
							label={'senha'}
							iconClass={FontAwesomeIcon}
							iconName={'pencil'}
							iconColor={'#000000'}
							iconSize={20}
							labelStyle={{ color: '#7C7C7C' }}
							inputStyle={{ color: '#7C7C7C' }}
						/>

						<ButtonComponent labelButton={'ENTRAR'} />
						<Button transparent style={StyleSheet.flatten(styles.buttonTransparent)} >
       <Text style={StyleSheet.flatten(styles.textButton)} onPress={() =>navigate('ForgotPassword')}>Esqueceu a senha?</Text>
       </Button>
					</View>
					</Image>
				);


	}
}
