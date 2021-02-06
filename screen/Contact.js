import React from 'react'
import{
    View,
    Text,
    FlatList,
    StyleSheet,
    
} from 'react-native'
import  colors from'../utils/colors'
import ContactListItem from '../components/ContactListItem'
  
const contacts=[
    {id: '1', name : 'Sareh', phone : '0792526545, email: Sareh@gmail.com' },
    {id: '2', name : 'Momtaz', phone : '079045677, email: Momtaz@gmail.com' },
    {id: '3', name : 'Bahar', phone : '0799887766, email: Bahar@gmail.com' },
    {id: '4', name : 'Homaira', phone : '0798898989, email: Homaira@gmail.com' },
    {id: '5', name : 'Wazhma', phone : '0797667755, email: Wazhma@gmail.com' },
    {id: '6', name : 'Morsal', phone : '0795454532, email: Morsal@gmail.com' },
    {id: '7', name : 'Monica', phone : '0794323234, email: Monica@gmail.com' },
    {id: '8', name : 'Khatera', phone :'0793453445, email: Khatera@gmail.com' },
    {id: '9', name : 'Samira', phone : '0791231123, email: Samira@gmail.com' },
    
]

export default function Contacts(){

 return(
    <FlatList
    data={contacts}
    keyExtractor={(item) => item.id}
    renderItem={({item}) =>{
        return <ContactListItem name={item.name} phone={item.phone} />
    }}
 
 />
 )

}

const styles = StyleSheet.create({

    
})