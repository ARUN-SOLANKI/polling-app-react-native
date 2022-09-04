import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { dimensions, colors } from '../Theme';

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.Button, props.containerStyle]}
      disabled={props.disabled}
      onPress={props.onPress}
      {...props}
      >
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    backgroundColor:colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: dimensions.width-200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});
