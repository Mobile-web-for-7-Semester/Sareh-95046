import React from 'react'
import { 
    StyleSheet,
    View,
    Image,
    Text
 } from "react-native";
import colors from '../config/colors';


 function ListItem({title, subTitle, image}){
     return(
         <View style={styles.container}>
             <Image source={image} style={styles.image} />
             <View>
                 <Text style={styles.title}>{title}</Text>
                 <Text style={styles.subTitle} >{subTitle}</Text>
             </View>
         </View>
     )
 }

 const styles = StyleSheet.create({
     container:{
         flexDirection: 'row',
         paddingHorizontal: 20
     },
     image: {
         width: 70,
         height: 70,
         borderRadius: 35,
         marginRight: 20
     },
     title:{
         fontWeight: '500'
     },
     subTitle:{
         color: colors.medium
     }
 })

 export default ListItem;