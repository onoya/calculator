import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from './Button';
import { pressNum, enter } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 20,
  },
  bottom: {
    flex: 1,
  },
  number: {
    color: 'white',
    backgroundColor: '#424242',
    textAlign: 'right',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
});

const Main = ({ calculatorState: { stack, inputState }, pressNumber, enterAction }) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.number}>{stack[2] || 0}</Text>
      <Text style={styles.number}>{stack[1] || 0}</Text>
      <Text style={styles.number}>{stack[0] || 0}</Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="clear" />
        <Button text="pow" />
        <Button text="swap" />
        <Button text="/" />
      </View>
      <View style={styles.row}>
        <Button text="9" onPress={pressNumber} />
        <Button text="8" onPress={pressNumber} />
        <Button text="7" onPress={pressNumber} />
        <Button text="X" />
      </View>
      <View style={styles.row}>
        <Button text="6" onPress={pressNumber} />
        <Button text="5" onPress={pressNumber} />
        <Button text="4" onPress={pressNumber} />
        <Button text="-" />
      </View>
      <View style={styles.row}>
        <Button text="3" onPress={pressNumber} />
        <Button text="2" onPress={pressNumber} />
        <Button text="1" onPress={pressNumber} />
        <Button text="+" />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={pressNumber} />
        <Button text="." />
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
};

const mapStateToProps = state => ({
  calculatorState: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    pressNumber: pressNum,
    enterAction: enter,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);