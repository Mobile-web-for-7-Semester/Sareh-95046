import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Contact from './screen/Contact'
import CreateContacts from './screen/CreateContacts'
import Profile from './screen/Profile'
import SearchScreen from './screen/SearchScreen'


const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={Contact} options={({navigation})=>({
              headerRight:()=>(
               <TouchableOpacity style={{paddingRight:20}} onPress={()=>navigation.navigate('SearchScreen')}>
                  <Text>
                      <MaterialIcons name="search" size={24} color ="black"></MaterialIcons>
                  </Text>
               </TouchableOpacity>
              )
            })} />
            <Stack.Screen name="CreateContacts" component={CreateContacts}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4'
  },
});
