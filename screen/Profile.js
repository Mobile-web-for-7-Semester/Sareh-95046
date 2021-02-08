import React from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    
} from 'react-native'
import  colors from'../utils/colors'
import ContactThumbail from '../components/ContactThumbail'
import DetailListItem from '../components/DetailListItem'
export default function Profile(props){
    const {route} =props
    const {item} = route.params
    const {name, phone, email}= item
    return(
        <View style={styles.container}>
            <View style={styles.thumbnailSection}>
                <ContactThumbail name={name} phone ={phone} />
            </View>
            <View style={styles.detailSection}>
                <DetailListItem icon ="email" title="Email" subtitle={email}/>
                <DetailListItem icon ="phone" title="work" subtitle={phone}/>
            </View>
        </View>
    )
    

}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    thumbnailSection:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary
    },

    detailSection:{
        flex: 1,
        paddingTop: 10
    }
})