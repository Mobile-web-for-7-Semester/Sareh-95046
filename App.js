import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 
SearhScreen from './screen/SearchScreen'

export default function App() {
  return (
    <View style={styles.container}>
        <SearhScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4'
  },
});
