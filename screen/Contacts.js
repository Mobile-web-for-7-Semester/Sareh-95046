import React,{useState, useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
}from 'react-native'
import {Feather} from '@expo/vector-icons'
import * as SQLite from 'expo-sqlite';


import colors from '../utils/colors'
import ContactListItem from '../components/ContactListItem'



const db = SQLite.openDatabase('contacts.db');


export default function Contacts({navigation}){
  const[ contacts, setContacts] = useState([]);

  useEffect(()=>{
    db.transaction((tx)=>{
        tx.executeSql('select * from contacts', [], (tx, {rows})=>{
          var data = [];
          for(var i = 0; i < rows.length; i++){
            data.push(rows[i]);
          }
          setContacts(data);
        })
    })
  })

  const deleteContact =(id)=> {
    db.transaction(tx =>{
      tx.executeSql('delete from contacts where id =?', [id]);
    })
  }
  return(
    <View>
      {contacts.length > 0 ?   <FlatList 
        data={contacts}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) =>{
            return <ContactListItem  name={item.name} phone={item.phone} onPress={()=>navigation.navigate('Profile',{item:item})} onDeleteContact={()=>deleteContact(item.id)}/>
        }}
      
      />: <View>
        <Text>No contact  to display</Text>
        </View>}
      <TouchableOpacity style={styles.floatButton} onPress={()=>navigation.navigate('CreateContact')}>
        <Text>
           <Feather name="plus" size={28} color="white" />
        </Text>
      </TouchableOpacity>
   </View>
  )

}
const styles =StyleSheet.create({
  floatButton:{
    backgroundColor: 'orange',
    padding:20,
    borderRadius:'50%',
    position: 'absolute',
    bottom:40,
    right:40

  }
    
})