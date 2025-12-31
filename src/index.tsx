import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyApplication: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.entry_text}>Ola mundo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entry_text: { fontSize: 22, color: '#333' },
});

export { MyApplication };
