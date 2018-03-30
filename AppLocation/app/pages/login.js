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

import styles from '../styles/loginStyle';

var ButtonComponent = require('./../components/buttonComponent');


const saeInput = (
	<Sae
		label={'Email Address'}
		iconClass={FontAwesomeIcon}
		iconName={'pencil'}
		iconColor={'white'}
		// TextInput props
		autoCapitalize={'none'}
		autoCorrect={false}
	/>
);

export default class Login extends Component {
	static navigationOptions = {
		headerBackTitle: null,
		title: 'ENTRAR',
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
					<View style={StyleSheet.flatten(styles.viewBackground)}>
						<Image source={require('../assets/img/loginLogo.png')} style={StyleSheet.flatten(styles.imgLogo)} />

						<Sae
							style={{ margin: 20, height:10, width:null }}
							label={'username'}
							iconClass={FontAwesomeIcon}
							iconName={'pencil'}
							iconColor={'#A79395'}
							iconSize={24}
							labelStyle={{ color: '#A79395' }}
							inputStyle={{ color: '#A79395' }}
						/>
						<Sae
							style={{ margin: 20, }}
							label={'senha'}
							iconClass={FontAwesomeIcon}
							iconName={'pencil'}
							iconColor={'#A79395'}
							iconSize={24}
							labelStyle={{ color: '#A79395' }}
							inputStyle={{ color: '#A79395' }}
						/>

						<ButtonComponent labelButton={'ENTRAR'} />
						<Button transparent style={StyleSheet.flatten(styles.buttonTransparent)} >
       <Text style={StyleSheet.flatten(styles.textButton)} onPress={() =>navigate('ForgotPassword')}>Esqueceu a senha?</Text>
       </Button>

					</View>
				);


	}
}
