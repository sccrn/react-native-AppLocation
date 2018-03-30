const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({

		viewBackground: {
			flex: 1,
			flexDirection: 'column',
		},

		imgLogo:{
            alignSelf: 'center', 
            marginTop: 30,
            height:130, 
            width:130,
		},

		temperatura: {
			fontFamily: 'Helvetica Neue',
			fontWeight: 'bold',
			fontSize: 90,
			textAlign: 'center',
		},

		buttonTransparent:{
			alignSelf: 'center',
		},

		textButton:{
			fontSize: 12,
            alignSelf:'center',
            color: '#923637',
		},

});
