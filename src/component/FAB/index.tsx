import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface IPropsFAB {
    onPress: () => void;
    title: string;
}
const FAB: React.FC<IPropsFAB> = ({ onPress, title }) => (
  <Pressable onPress={onPress} style={styles.fab}>
    <Text style={styles.fabText}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  fab: {
    flex:1,
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 10,
    borderRadius: 30,
    backgroundColor: 'black',
  },
  fabText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FAB;
