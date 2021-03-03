import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = (props) => {
  console.log(props);
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {backgroundColor: props.color === undefined ? '49d893' : props.color},
      ]}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#49d893',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: '#400030',
  },
});

export default Button;
