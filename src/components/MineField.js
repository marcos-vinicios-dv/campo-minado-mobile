import React from 'react';
import {StyleSheet, View} from 'react-native';

import Field from './Field';

const MineField = props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => props.onOpenField(r, c)}
          onSelect={() => props.onSelectField(r, c)}
        />
      );
    });
    return (
      <View key={r} style={{flexDirection: 'row'}}>
        {columns}
      </View>
    );
  });

  return <View style={styles.container}>{rows}</View>;
};

export default MineField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
});
