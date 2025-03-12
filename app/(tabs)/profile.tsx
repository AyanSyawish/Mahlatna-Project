import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white"}}>
      <View style={styles.info}>
      <MaterialIcons name="edit" size={30} color="black" />
        <Text style={{ fontSize:20, fontWeight:'500'}}>معلومات الحساب</Text>
      </View>
      <View style={styles.details}>

      <View style={styles.names}>
        <Text style={{fontSize:15}}>اسم المستخدم</Text>
        <Text style={{color:'grey'}}>راوێژ ڕێبین</Text>
      </View>
      <View style={styles.number}>
        <Text style={{fontSize:15}}> رقم الهاتف</Text>
        <Text style={{color:'grey'}}> +964 750 8614371</Text>
      </View>
      <View style={styles.address}>
        <Text style={{fontSize:15}}>  العنوان</Text>
        <Text style={{color:'grey'}}> ابعد مكان في الدنيا</Text>
      </View>
      </View>
      <View style={styles.general}>
        <Text style={{ fontSize:20, fontWeight:'500'}}>عام</Text>
      </View>
      <View style={styles.details}>

      <View style={styles.privacy}>
      <MaterialIcons name="arrow-back-ios-new" size={20} color="#888" />
        <Text style={{fontSize:15}}> الخصوصية</Text>
      </View>
      <View style={styles.about}>
      <MaterialIcons name="arrow-back-ios-new" size={20} color="#888" />
        <Text style={{fontSize:15}}>  حول</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
info:{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:20,
},
details:{
  backgroundColor:'#f3f3f3',
  paddingHorizontal:20,
  marginHorizontal:20,
  borderRadius:10,
  marginTop:15
},
names:{
  width:330,
  flexDirection:'column',
  alignItems:'flex-end',
  marginVertical:10,
  paddingBottom:15,
  paddingRight:10,
  borderBottomWidth:1,
  borderBottomColor:'#888',
  
},
number:{
  width:330,
  flexDirection:'column',
  alignItems:'flex-end',
  marginVertical:10,
  paddingBottom:15,
  paddingRight:10,
  borderBottomWidth:1,
  borderBottomColor:'#888',
},
address:{
  width:330,
  flexDirection:'column',
  alignItems:'flex-end',
  marginVertical:10,
  paddingBottom:15,
  paddingRight:10,
},
general:{
  flexDirection:'row',
  justifyContent:'flex-end',
  paddingHorizontal:20,
  marginTop:20
},
privacy:{
  width:330,
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:20,
  marginVertical:12,
  paddingBottom:19,
  paddingRight:10,
  borderBottomWidth:1,
  borderBottomColor:'#888',  
},
about:{
  width:330,
  flexDirection:'row',
  justifyContent:'space-between',
  marginVertical:10,
  paddingBottom:15,
  paddingRight:10,
 
}
})

export default Profile