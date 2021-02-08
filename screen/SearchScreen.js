import React from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    
} from 'react-native'
import  colors from'../utils/colors'

export default function SearchScreen(){
    return(
        <View style={styles.SearchContainer}>
            <TextInput placeholder="search..." style={styles.searchInput}></TextInput>
        </View>
    )
    

}

const styles = StyleSheet.create({
    SearchContainer:{
        backgroundColor: colors.secondary

    },
    searchInput:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 20,
        borderRadius: 10,
        backgroundColor: colors.white
    }
})