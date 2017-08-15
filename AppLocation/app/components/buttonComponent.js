import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  PropTypes,
  Platform,
} from 'react-native';

import {
  Container,
  Content,
  Button,
  Icon,
  InputGroup,
} from 'native-base';





class ButtonComponent extends Component {
  constructor(props) {
    super(props);

     this.state = {
      labelButton: this.props.labelButton ,
      text:this.props.var,
    };

  }

      render() {
          return (

                  <View style = {{  flex: 1,
                    marginRight: 30,
                  marginLeft: 30,
                  marginTop: 50,}}>
                    <Button full block success  style={{ backgroundColor:"#CF606A", borderRadius: 8}}>
                      <Text style ={{color: '#FFFFFF', 
          fontSize: 16,
          }}>{this.state.labelButton}</Text>
                    </Button>
                  </View>

                  );
                }

}


module.exports = ButtonComponent;