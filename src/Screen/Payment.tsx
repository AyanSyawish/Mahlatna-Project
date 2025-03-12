import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const Payment = () => {
     const [visible, setVisible] = useState(true);
      const handlePress = () => {
        setVisible(!visible);
      };
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View >
            <Text style={{textAlign:'right', fontSize:35, paddingBottom:20, fontWeight:500}}>الدفع عبر</Text>
            <Text style={{textAlign:'right', color:'#888', fontSize:15}}>حدد طريقة الدفع التي تريد الدفع من خلالها</Text>
        </View>
        <View>
            <View style={styles.fastPay}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                  {visible && (
                    <AntDesign name="check" size={24} color="white" />
                  )}
                  {!visible && (
                    <TouchableOpacity
                      style={styles.button2}
                      onPress={handlePress}
                      
                    />
                  )}
                </TouchableOpacity>
                <Text style={{position:'relative',left:90, alignSelf:'center', fontSize:15}}>فاستبي</Text>
            <Image source={require('../../assets/images/fastPay.png')} style={styles.images}/>
            </View>
            <View style={styles.FIB}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                  {visible && (
                    <AntDesign name="check" size={24} color="white" />
                  )}
                  {!visible && (
                    <TouchableOpacity
                      style={styles.button2}
                      onPress={handlePress}
                      
                    />
                  )}
                </TouchableOpacity>
                <Text style={{position:'relative',left:90, alignSelf:'center', fontSize:15}}>FIB</Text>
            <Image source={require('../../assets/images/FIB.png')} style={styles.images}/>
            </View>
        </View>
        <View style={styles.cancellation}>
            <TouchableOpacity>
               <Text style={{color:'#485E92', fontSize:17}}>
               دفع
               </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>router.push('/(tabs)/home')}>
               <Text style={{color:'#485E92', fontSize:17}} >
               الغاء
               </Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
    container:{
        paddingHorizontal:30
    },
images:{
    width:50,
    height:50,
    borderRadius:20  
},
button: {
    alignSelf:'center',
    width: 24,
    height: 24,
    borderWidth: 0.1,
    borderColor: "black",
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  button2: {
  
    width: 24,
    height: 24,
    borderWidth: 0.7,
    backgroundColor: "white",
    borderColor: "black",
    // borderBlockColor: "white",
    borderRadius: 5,
  },
  fastPay:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:60,
    borderBottomWidth:1,
    borderColor:'#888',
    paddingBottom:15
  },
  FIB:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:20,
    borderBottomWidth:1,
    borderColor:'#888',
    paddingBottom:15
  },
  cancellation:{
    display:'flex',
    flexDirection:'row',
    paddingTop:60,
    justifyContent:'flex-end',
    gap:50,
    paddingHorizontal:20,
    
  }
})
export default Payment