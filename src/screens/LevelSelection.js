import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';

const LevelSelection = props => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      transparent={true}
      animationType="slide">
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
          <TouchableOpacity
            style={[styles.button, styles.bgEasy]}
            onPress={() => props.onLevelSelected(0.1)}>
            <Text styles={styles.buttonLabel}> Fácil </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgNormal]}
            onPress={() => props.onLevelSelected(0.2)}>
            <Text styles={styles.buttonLabel}> Intermediário </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgHard]}
            onPress={() => props.onLevelSelected(0.3)}>
            <Text styles={styles.buttonLabel}> Difícil </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LevelSelection;

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#eee',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#46b65d',
  },
  bgNormal: {
    backgroundColor: '#2765f7',
  },
  bgHard: {
    backgroundColor: '#f26337',
  },
});
