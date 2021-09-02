import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';

import params from './src/params';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  showMines,
  hadExplosion,
  wonGame,
  invertFlag,
  flagsUsed,
} from './src/functions';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';

const App = () => {
  const [board, setBoard] = useState([]);
  const [showLevelSelection, setShowLevelSelection] = useState(false);

  function minesAmount() {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return Math.ceil(cols * rows * params.difficultLevel);
  }

  function createState() {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    setBoard(createMinedBoard(rows, cols, minesAmount()));
  }

  useEffect(() => {
    setBoard(
      createMinedBoard(
        params.getRowsAmount(),
        params.getColumnsAmount(),
        minesAmount(),
      ),
    );
  }, []);

  function onOpenField(row, column) {
    const newCloneBoard = cloneBoard(board);
    openField(newCloneBoard, row, column);
    const userLost = hadExplosion(newCloneBoard);
    const userWon = wonGame(newCloneBoard);

    if (userLost) {
      showMines(newCloneBoard);
      Alert.alert('Perdeeeeu!', 'Que buuurro!');
    }

    if (userWon) {
      Alert.alert('Parabéns!', 'Você venceu!');
    }

    setBoard(newCloneBoard);
  }

  function onSelectField(row, column) {
    const newCloneBoard = cloneBoard(board);
    invertFlag(newCloneBoard, row, column);
    const userWon = wonGame(newCloneBoard);

    if (userWon) {
      Alert.alert('Parabéns!', 'Você venceu!');
    }
    setBoard(newCloneBoard);
  }

  function onLevelSelected(level) {
    params.difficultLevel = level;
    createState();
    setShowLevelSelection(false);
  }

  return (
    <View style={styles.container}>
      <LevelSelection
        isVisible={showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowLevelSelection(false)}
      />
      <Header
        flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={createState}
        onFlagPress={() => setShowLevelSelection(true)}
      />
      <View style={styles.board}>
        <MineField
          board={board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
