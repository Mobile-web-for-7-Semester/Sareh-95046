import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import colors from '../config/colors';

function Card({ title, subtitle, image }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer:{
        padding:20
    },
    title:{
        marginBottom: 7
    },
    subtitle:{
        color: colors.info,
        fontWeight: 'bold'
    }
})


export default Card;