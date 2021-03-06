import PropTypes from 'prop-types';
import React from 'react';
import {
  Platform, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  clear, enter, operation, pressNum, swap, toggleNegative,
} from './actions';
import Button from './Button';

const baseNumber = {
  backgroundColor: '#333',
  textAlign: 'right',
  padding: 10,
  fontSize: 40,
};

const styles = StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  top: {
    paddingTop: Platform.OS === 'ios' ? 32 : 20,
  },
  bottom: {
    flex: 1,
  },
  append: {
    ...baseNumber,
    color: 'white',
  },
  replace: {
    ...baseNumber,
    color: '#0abde3',
  },
  push: {
    ...baseNumber,
    color: '#fbc531',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
});

const Main = ({
  calculatorState: { stack, inputState },
  pressNumber,
  enterAction,
  operationAction,
  clearAction,
  swapAction,
  toggleNegativeAction,
}) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <TouchableOpacity style={styles.bottomBorder} onPress={() => toggleNegativeAction(2)}>
        <Text numberOfLines={1} style={styles.append}>
          {'  '}
          {stack[2] || 0}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBorder} onPress={() => toggleNegativeAction(1)}>
        <Text numberOfLines={1} style={styles.append}>
          {'  '}
          {stack[1] || 0}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleNegativeAction(0)}>
        <Text numberOfLines={1} style={styles[inputState]}>
          {'  '}
          {stack[0] || 0}
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="clear" onPress={clearAction} />
        <Button text="pow" onPress={operationAction} />
        <Button text="swap" onPress={swapAction} />
        <Button text="/" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="9" onPress={pressNumber} />
        <Button text="8" onPress={pressNumber} />
        <Button text="7" onPress={pressNumber} />
        <Button text="X" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="6" onPress={pressNumber} />
        <Button text="5" onPress={pressNumber} />
        <Button text="4" onPress={pressNumber} />
        <Button text="-" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="3" onPress={pressNumber} />
        <Button text="2" onPress={pressNumber} />
        <Button text="1" onPress={pressNumber} />
        <Button text="+" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={pressNumber} />
        <Button text="." onPress={pressNumber} />
        <Button text="enter" special onPress={enterAction} />
      </View>
    </View>
  </View>
);

Main.propTypes = {
  calculatorState: PropTypes.shape({
    stack: PropTypes.array.isRequired,
    inputState: PropTypes.string.isRequired,
  }).isRequired,
  pressNumber: PropTypes.func.isRequired,
  enterAction: PropTypes.func.isRequired,
  operationAction: PropTypes.func.isRequired,
  clearAction: PropTypes.func.isRequired,
  swapAction: PropTypes.func.isRequired,
  toggleNegativeAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  calculatorState: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    pressNumber: pressNum,
    enterAction: enter,
    operationAction: operation,
    clearAction: clear,
    swapAction: swap,
    toggleNegativeAction: toggleNegative,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
