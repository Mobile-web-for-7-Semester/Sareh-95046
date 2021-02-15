import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    ActivityIndicatorBas
} from 'react-native'
import  colors from'../utils/colors'
export default function Avatar({name, size}){
     const initial = name[0].toUpperCase();
    return(
        <View style={[styles.avatarContainer, {height:size, width:size}]}>
            <Text style={styles.avatarTxt}>{initial}</Text>
        </View>
    )

}

const styles = StyleSheet.create({

    avatarContainer: {
        borderRadius: '50%',
        borderColor: colors.white,
        borderWidth: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems:'center'
    },
    avatarTxt:{
        color: colors.white
    }
})