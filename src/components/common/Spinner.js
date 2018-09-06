import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  );
}

const styles = {
  spinnerStyle: {
    // Take up all the available space.
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export { Spinner };