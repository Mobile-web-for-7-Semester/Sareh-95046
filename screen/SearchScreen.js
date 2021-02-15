import React, {useState, useEffect} from 'react'
import{
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    } from 'react-native'

import * as SQLite from 'expo-sqlite'
import  colors from'../utils/colors'
import ContactListItem from '../components/ContactListItem'



const db = SQLite.openDatabase('contacts.db');


export default function SearchScreen(){
     const [allContacts, setAllContacts] = useState ([]);
     const [filteredContacts, setFilteredContacts]= useState([]);

     useEffect(()=>{
         db.transaction(tx => {
             tx.executeSql('select * from contacts', [], (tx, {rows}) =>{
                 var data =[];
                 for(var i=0; i<rows.length; i++){
                     data.push(rows[i]);
                 }
                 setAllContacts(data);
             })
         })
     })


     const searchContacts =(text)=>{
        const filterText = text.toLowerCase();
        const newContacts= allContacts.filter((contact) =>{
            const item = contact.name.toLowerCase();
            return item.indexOf(filterText) > -1;
        })
        setFilteredContacts(newContacts);
         if(text.length < 1) {
             setFilteredContacts([]);
         }
      }
    return(
    <View>    
        <View style={styles.SearchContainer}>
            <TextInput placeholder="search..." style={styles.searchInput} onChangeText={(text)=>{ searchContacts(text)}}></TextInput>
        </View>
        {filteredContacts.length > 0? <FlatList 
            data={filteredContacts}
            keyExtractor={(item)=> item.id}
            renderItem={({item}) =>{
                return <ContactListItem  name={item.name} phone={item.phone} onPress={()=>navigation.navigate('Profile',{item:item})} onDeleteContact={()=>deleteContact(item.id)}/>
            }}
          
          /> : <View>
              <Text>Nothing to display</Text>
              </View> }
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