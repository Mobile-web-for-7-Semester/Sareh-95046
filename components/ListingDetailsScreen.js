import React from 'react'
import { 
    StyleSheet,
    View,
    Image,
    Text
 } from "react-native";

import colors from '../config/colors';
import ListItem from '../components/ListItem'

 function ListingDetailsScreen(props){
     return(
         <View>
             <Image source={require('../assets/jacket.jpg')} style={styles.image}/>
             <View style={styles.detailContainer}>
                 <Text>Red jacket for sale</Text>
                 <Text style={styles.price}>$1000</Text>
             </View>
             <View style={styles.userContainer}>
             <ListItem title="Sharif Ahmad Jaaan" subTitle="5 Listings" image={require('../assets/mosh.jpg')} />
             </View>
         </View>
     )  
 }

 const styles = StyleSheet.create({
     image:{
         width: '100%',
         height: 300,
     },

     detailContainer: {
         padding: 20
     },
     price:{
         marginVertical: 10,
         color: colors.info,
         fontWeight: 'bold',
         fontSize: 20
     },
     userContainer:{
         paddingTop: 40
     }
 })


 export default ListingDetailsScreen;