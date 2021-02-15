import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Avatar from './Avatar'

export default function ContactThumbnail({
  name,
  phone
}) {
  
  return (
    <View style={styles.container}>
      <Avatar name={name} size={90} />
     <Text style={styles.name}>{name}</Text>
     <Text style={styles.phone}>{phone}</Text>
        
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
    color:'white'
  },

  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
});