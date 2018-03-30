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


import styles from '../style/buttonComponentStyle';


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

                  <View style={StyleSheet.flatten(styles.viewBackground)}>
                    <Button full block success  style={StyleSheet.flatten(styles.buttonStyle)}>
                      <Text style={StyleSheet.flatten(styles.textButton)}>{this.state.labelButton}</Text>
                    </Button>
                  </View>

                  );
                }

}


module.exports = ButtonComponent;