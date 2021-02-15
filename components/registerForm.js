import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
 } from 'react-native';

export default function RegisterForm() {
  return (
    <View style={styles.regForm}>
        <Text style={styles.header}>Register</Text>
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Phone" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>Sign Up</Text>

        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  regForm: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft:30,
    paddingRight:30
  },
  header:{
      fontSize:20,
      borderBottomColor:'#199187',
      borderBottomWidth:1,
      marginBottom:30,
      alignSelf:'stretch',
      fontWeight:'bold'
  },
  input:{
      padding:20,
      borderColor:'#199187',
      borderWidth:1,
      borderRadius:5,
      marginBottom:30
  },
  button:{
      backgroundColor:'#199187',
      padding:30,
      borderRadius:5,
      textAlign:'center'
      
  },
  buttonTxt:{
      color:'#708090',
      fontWeight:'bold'
  }
});