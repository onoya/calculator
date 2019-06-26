import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

const baseContainer = {
  alignItems: 'center',
  justifyContent: 'center',
  borderRightWidth: 1,
  borderColor: 'white',
};

const baseText = {
  fontSize: 36,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    ...baseContainer,
  },
  special: {
    flex: 2,
    backgroundColor: '#fbc531',
    ...baseContainer,
  },
  text: {
    ...baseText,
  },
  specialText: {
    ...baseText,
    color: 'white',
  },
});

const Button = ({ text, special, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(text)}
    style={special ? styles.special : styles.container}
  >
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  special: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  special: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default Button;
