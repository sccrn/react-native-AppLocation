const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({

		backgroundImage: {
			flex:1,
			width:null, 
			height:null,
		},

		viewBackground: {
			flex: 1,
			flexDirection: 'column',
			opacity: 1,
		},

		imgLogo:{
            alignSelf: 'center', 
            marginTop: 100,
            height:170, 
            width:173,
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
