import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {colors, dimensions} from '../Theme';

const InputField = props => {
  return (
    <View>
    {props.label && <Text style={styles.label}>{props.label}</Text>}
      <TextInput
        style={[styles.TextInput, props.style]}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        placeholderTextColor={props.placeholderTextColor}
        {...props}
      />
      {props.error ? <Text style={styles.error}>{props.error}</Text>:null}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderColor: colors.blue,
    width:dimensions.width-50,
    marginVertical:10,
    borderRadius:5,
    paddingHorizontal:10
  },
  error:{
    color:colors.red,
    fontSize:12
  },
  label:{
    fontSize:14,
    color:colors.grey
  }
});
