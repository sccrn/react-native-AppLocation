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
				<Image source={require('../assets/img/background.png')} style={{ flex: 1, width: null, height: null }}>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<Image source={require('../assets/img/loginLogo.png')} style={{ alignSelf: 'center', marginTop: 30,height:130, width:130  }} />

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
						<Button transparent style={{alignSelf:'center'}} >
       <Text style ={{fontSize: 12,alignSelf:'center', color:"#923637"}} onPress={() =>navigate('ForgotPassword')}>Esqueceu a senha?</Text>
       </Button>

					</View>
				</Image>
				);


	}
}
