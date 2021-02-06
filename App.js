import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from './screen/Contact'

export default function App() {
  return (
    <View style={styles.container}>
        <Contacts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
