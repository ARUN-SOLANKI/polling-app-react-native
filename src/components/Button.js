import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.Button, props.containerStyle]}
      disabled={props.disabled}
      onPress={props.onPress}
      >
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#1d4354',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: Dimensions.get('window').width - 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
