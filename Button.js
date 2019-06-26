import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

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

const Button = ({ text, special, onPress }) => {
  const textRef = useRef();

  const handleTextRef = useCallback((ref) => {
    textRef.current = ref;
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        textRef.current.rubberBand(400);
        onPress(text);
      }}
      style={special ? styles.special : styles.container}
    >
      <Animatable.Text ref={handleTextRef} style={special ? styles.specialText : styles.text}>
        {text}
      </Animatable.Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  special: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  special: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default Button;
