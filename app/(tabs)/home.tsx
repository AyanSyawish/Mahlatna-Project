import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MainTicket from "@/MainTicket";
import { router } from "expo-router";

const Home = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Render the component here */}
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/cola.png")}
          />
        </View>

        <View style={styles.together}>
          
          <MainTicket />
        
          
        </View>

        <View style={styles.tickets}>
          <View style={styles.totalTickets}>
            <Text
              style={{
                textAlign: "right",
                fontSize: 12,
                color: "grey",
                paddingBottom: 6,
              }}
            >
              المجموع
            </Text>
            <Text style={{ fontSize: 25, paddingLeft: 14 }}>3,000</Text>
          </View>
          <View style={styles.ticketNumber}>
            <Text
              style={{
                textAlign: "right",
                fontSize: 12,
                color: "grey",
                paddingBottom: 6,
              }}
            >
              التذاكر
            </Text>
            <Text style={{ fontSize: 20, paddingLeft: 14 }}>
              1,500 <Text style={{ fontSize: 12, color: "grey" }}>x10</Text>{" "}
            </Text>
          </View>
          <View style={styles.count}>
            <TouchableOpacity
              style={styles.minusButton}
              onPress={incrementCount}
            >
              <Text style={styles.minus}>+</Text>
            </TouchableOpacity>
            <Text
              style={{ paddingHorizontal: 10, fontSize: 20, color: "#007AFF" }}
            >
              {count}
            </Text>
            <TouchableOpacity
              style={styles.minusButton}
              onPress={decrementCount}
            >
              <Text style={styles.minus}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buyOption}>
          <TouchableOpacity style={styles.buyButton} onPress={()=> router.push('/payment')}>
            <Text style={{ color: "white", textAlign: "center" }}>الشراء</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  image: {
    marginTop: 20,
    marginBottom: -40,
    width: "100%",
    height: "50%",
    // resizeMode:'contain'
  },
  together: {
    width: "100%",
    paddingHorizontal: 5,
    aspectRatio: 397 / 218,
    display: "flex",
    flexDirection: "row",
// marginHorizontal:40,
marginTop:-100,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: 4,
    // width: "97%",
    //     height: "24%",
    //     //    borderColor:'black',
    //     //    borderWidth:2,
    //     //    borderRadius:10
    //     borderRadius: 40, // Round corners to resemble a ticket
    //     borderWidth: 0.5, // Border width for the ticket
    //     borderColor: "#007AFF", // Border color (black)
    //     overflow: "hidden", // Hide the overflow for the rounded corners
    //     backgroundColor: "#f3f3f3", // Background color for the ticket
    //     position: "relative",
    //     bottom:70
  },
  image2: {
    // alignSelf:'flex-start',
    // maxWidth:'60%',
    // maxHeight:'60%',
    // width:'60%',
    // flex:3,
    height: 270,
    width: 290,
    resizeMode: "contain",
    // borderRadius:30,
    // borderWidth:1,
    // borderColor:'white',
    // borderLeftWidth:1,
    borderColor: "#007AFF",
    borderStyle: "dashed",
    borderRadius: 50, // Round corners to resemble a ticket
    // borderWidth: 4, // Border width for the ticket
  },
  whitesquare: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 250,
    width: 2,
    borderStyle: "dashed",
    backgroundColor: "#007AFF",
  },
  middleView: {
    backgroundColor: "white",
    height: "20%",
    width: 28,
    borderRadius: 10,
    position: "relative",
    right: 14,
  },
  text1: {
    // flexShrink:1,
    color: "#007AFF",
    fontSize: 17,
    fontWeight: "400",
    // maxWidth:'30%',
    // maxHeight:'50%',
    width: 200,
    textAlign: "center",
    transform: [{ rotate: "-90deg" }],
    // writingDirection: "rtl",
    // resizeMode:'cover',
    // paddingTop: 30,
    // paddingBottom: 50,
    // paddingLeft:10,
    // backgroundColor:'#DCDCDC',
    // borderTopRightRadius:30,
    // borderBottomRightRadius:30,
    // borderBottomLeftRadius:30,
    //    marginRight:1,
    borderRadius: 40, // Round corners to resemble a ticket
  },
  tickets: {
    display: "flex",
    flexDirection: "row",
    // width:'100%',
    justifyContent: "space-around",
    marginRight: 5,
    marginVertical:40
  },
  count: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  minusButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    // padding:10,
    borderRadius: 30,
    // width:'15%'
  },
  minus: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  ticketNumber: {
    marginRight: 20,
    borderLeftColor: "#007AFF",
    borderLeftWidth: 1,
    height: 60,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  totalTickets: {
    // marginRight:5,
    justifyContent: "center",
  },
  buyOption: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buyButton: {
    width: "94%",
    backgroundColor: "#007AFF",
    // borderRadius:30,
    // paddingVertical:10,
    // paddingHorizontal:5,
    marginTop: 40,
    borderRadius: 10,
    padding: 10,
  },
});

export default Home;
