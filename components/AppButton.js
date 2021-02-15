import React from 'react'
import { 
    StyleSheet,
    Text,
    TouchableOpacity
 } from "react-native";
import { color } from 'react-native-reanimated';

 import colors from '../config/colors'

 function AppButton({title, onPress, color="success"}){
     return(
         <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
             <Text style={styles.buttonTxt}>{title}</Text>
         </TouchableOpacity>
     )
 }

 const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding: 15,
        width: '100%',
        marginVertical: 10
    },

    buttonTxt: {
        color: colors.white
    }
 })


 export default AppButton;