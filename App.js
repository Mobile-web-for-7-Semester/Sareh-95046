import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './screen/Profile'

export default function App() {
  return (
    <View style={styles.container}>
        <Profile name="sareh" phone="0798654321" email="sarehraofian@gmail.com"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
