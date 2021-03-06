import React, { Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	Image,
	PanResponder,
} from 'react-native';

import {
	Button,
} from 'native-base';

import {
	NavigationActions
} from 'react-navigation';

import {
	StackNavigator,
} from 'react-navigation';

import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

import SplashScreen from 'react-native-splash-screen';

export default class OnBoarding extends Component {

	static navigationOptions = {
		header: null
	}

	constructor(props) {
		super(props);

		this.state = {
			size: { width, height },
		};
	}

	_onLayoutDidChange = (e) => {
		const layout = e.nativeEvent.layout;
		this.setState({ size: { width: layout.width, height: layout.height } });
	}

	componentDidMount() {
		SplashScreen.hide()
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
			<View style={{ flex: 1, backgroundColor: 'transparent' }} onLayout={this._onLayoutDidChange}>

				<Carousel delay={4000} style={this.state.size}
					autoplay
					onAnimateNextPage={(p) => console.log(p)}>
					<Image source={require('../assets/img/photo1.png')} style={[{ backgroundColor: 'transparent' }, this.state.size]} />
					<Image source={require('../assets/img/photo2.png')} style={[{ backgroundColor: 'transparent' }, this.state.size]} />
					<Image source={require('../assets/img/photo3.png')} style={[{ backgroundColor: 'transparent' }, this.state.size]} />
				</Carousel>
				<View style={[{
					backgroundColor: 'transparent',
					position: 'absolute',
					width: width,
					bottom: 24,
					marginTop: 40,
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center'
				}, { width: this.state.size.width }]}>
					<Button full block style={{ backgroundColor: '#CF606A', marginTop: 10, marginLeft: 7, width: 140, height: 35, borderRadius: 8 }}>
						<Text style={{ color: '#FFFFFF', fontSize: 13 }} onPress={() => navigate('Login')}>ENTRAR</Text>
					</Button>
					<Button full block style={{ backgroundColor: '#CF606A', marginTop: 10, marginLeft: 20, width: 140, height: 35, borderRadius: 8 }}>
						<Text style={{ color: '#FFFFFF', fontSize: 13 }} onPress={() => navigate('Register')}>CADASTRAR-SE</Text>
					</Button>
				</View>
			</View>

		);


	}
}
