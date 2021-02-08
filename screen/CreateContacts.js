import React from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    
} from 'react-native'
import  colors from'../utils/colors'

export default function CreateContacts(){
    return(
        <View style = {styles.formcontainer}>
            <TextInput placeholder="Name" style={styles.input}/>
            <TextInput placeholder="Email" keyboardType="email-address" style={styles.input}/ >
            <TextInput placeholder="Phone" keyboardType="numeric" style={styles.input}/>
            <TouchableOpacity style = {[styles.button, {backgroundColor: colors.primary}]}>
                <Text style={styles.buttonTxt}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.button, {backgroundColor: 'red'}]}>
                <Text style={styles.buttonTxt}>Cansel</Text>
            </TouchableOpacity>
        </View>
    )
    

}

const styles = StyleSheet.create({
    formcontainer:{
        borderRadius: 30,
        marginTop:60,
        paddingVertical: 20,
        paddingHorizontal: 40,
        backgroundColor: colors.white
    },
    input: {
        paddingBottom: 10, 
        marginBottom: 10,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1

    },
    button:{
        padding: 20,
        marginTop:20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt:{
        color: colors.white
    }

})