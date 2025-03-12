import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { useIsFocused } from '@react-navigation/native';

const TabsLayout = () => {
    // const isFocused=useIsFocused();
  return (
    <Tabs> 
        <Tabs.Screen 
        name='profile'
        options={{
            tabBarLabel:'ملف الشخصي',
            tabBarIcon:({focused})=>(
                <View style={focused && styles.iconContainer}>
                     <MaterialCommunityIcons name='account' size={28} color={focused? "#fff":"#888"}  />
                </View>
            ),
            tabBarIconStyle:{
                marginTop:5,
                height:40,
                width:70
            },
            headerShown:false,
        }}
        />
        <Tabs.Screen 
        name='tickets'
        options={{
            tabBarLabel:'تذاكري',
            tabBarIcon:({focused})=>(
                <View style={focused && styles.iconContainer}>
                  <MaterialCommunityIcons name="ticket-confirmation-outline" size={28} color={focused ? "#fff":"#888"} />
                </View>
            ),
            tabBarIconStyle:{
                marginTop:5,
                height:40,
                width:70
            },
            headerShown:false
        }}
        />
        <Tabs.Screen
         name='home'
         options={{
            tabBarLabel:'الرئيسية',
            tabBarIcon:({focused})=>(
                <View style={focused&&styles.iconContainer}>
                   <MaterialCommunityIcons name="home" size={28} color={ focused ? "#fff":"#888"} />
                </View>
            ),
            tabBarIconStyle:{
                marginTop:5,
                height:40,
                width:70
            },
            headerShown:false
         }}
        />
    </Tabs>
  )
}
const styles=StyleSheet.create({
    iconContainer:{
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#007AFF',
       borderRadius:19,
       height:'100%',
       width:'100%',
       paddingHorizontal:10,
       paddingVertical:1
       

    }

})

export default TabsLayout