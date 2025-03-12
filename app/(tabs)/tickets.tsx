import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Feather } from "@expo/vector-icons"; // Import FontAwesome
// import MyTickets from './MyTickets';
import Ticket from "@/Ticket";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { transform } from "@babel/core";

const Tickets = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  // const [tickets, setTickets] = useState([1, 2, 3, 4]);
  const handlePress = () => {
    setIsClicked(!isClicked);
    setIsClicked2(isClicked2);
    setIsVisible2(!isVisible2);
    // router.push('/(tabs)/tickets/MyTickets')
  };
  const handlePress2 = () => {
    setIsClicked2(!isClicked2);
    setIsClicked(isClicked);
    setIsVisible(!isVisible);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.icons}>
        <Feather name="menu" size={30} color="black" />
        <FontAwesome name="search" size={30} color="black" />
      </View>

      <View style={styles.Links}>
        <TouchableOpacity onPress={handlePress} style={{}}>
          <Text
            style={{
              borderBottomWidth: isClicked ? 5 : 0,
              borderBottomColor: isClicked ? "#093982" : "none",
              borderBottomEndRadius: 5,
              borderBottomStartRadius: 5,
              paddingBottom: 15,
            }}
          >
            طلباتك(2)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress2} style={{}}>
          <Text
            style={{
              borderBottomWidth: isClicked2 ? 5 : 0,
              borderBottomColor: isClicked2 ? "#093982" : "none",
              borderBottomEndRadius: 5,
              borderBottomStartRadius: 5,
              paddingBottom: 15,
            }}
          >
            تذاكرك(8)
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {isVisible && (
          <View style={styles.tickets}>
            
            {Array.from({ length: 4 }).map((_, index) => (
      <Ticket key={index} />
    ))}
      
          </View>
        )}
      </ScrollView>
      <View>
        {isVisible2 && (
          <View style={styles.order}>
            <ScrollView>

            
            <View style={styles.done}>
              
              <View style={styles.first}>
                <Text
                  style={{
                    color: "white",
                    backgroundColor: "#6FCF97",
                    paddingHorizontal: 35,
                    paddingVertical: 3,
                    borderRadius: 10,
                  }}
                >
                  {" "}
                  تم
                </Text>
                <Text>رقم الطلب:0001</Text>
              </View>
              <View style={styles.row}>
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
                      paddingBottom: 12,
                    }}
                  >
                    التذاكر
                  </Text>
                  <Text style={{ fontSize: 20, paddingLeft: 14 }}>
                    1,500{" "}
                    <Text style={{ fontSize: 12, color: "grey" }}>x10</Text>{" "}
                  </Text>
                </View>

                <View style={styles.date}>
                  <Text
                    style={{
                      textAlign: "right",
                      fontSize: 12,
                      color: "grey",
                      paddingBottom: 20,
                    }}
                  >
                    التاريخ
                  </Text>
                  <Text style={{
                      textAlign: "right",
                      fontSize: 12,
                      color: "grey",
                      paddingBottom: 20,
                    }}>19/02/2025</Text>
                </View>
                <View>
                  <MaterialCommunityIcons
                    name="ticket-outline"
                    size={60}
                    color="#888"
                    style={{
                      transform: [{ rotate: "90deg" }],
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.done}>
              <View style={styles.first}>
                <Text
                  style={{
                    color: "white",
                    backgroundColor: "#F2994A",
                    paddingHorizontal: 13,
                    paddingVertical: 3,
                    borderRadius: 10,
                  }}
                >
                  
                  قيد الانتظار
                </Text>
                <Text>رقم الطلب:0001</Text>
              </View>
              <View style={styles.row}>
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
                      paddingBottom: 12,
                    }}
                  >
                    التذاكر
                  </Text>
                  <Text style={{ fontSize: 20, paddingLeft: 14 }}>
                    1,500{" "}
                    <Text style={{ fontSize: 12, color: "grey" }}>x10</Text>{" "}
                  </Text>
                </View>

                <View style={styles.date}>
                  <Text
                    style={{
                      textAlign: "right",
                      fontSize: 12,
                      color: "grey",
                      paddingBottom: 20,
                    }}
                  >
                    التاريخ
                  </Text>
                  <Text style={{
                      textAlign: "right",
                      fontSize: 12,
                      color: "grey",
                      paddingBottom: 20,
                    }}>19/02/2025</Text>
                </View>
                <View>
                  <MaterialCommunityIcons
                    name="ticket-outline"
                    size={60}
                    color="#888"
                    style={{
                      transform: [{ rotate: "90deg" }],
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.done}>
              <View style={styles.first}>
                <Text
                  style={{
                    color: "white",
                    backgroundColor: "#E46962",
                    paddingHorizontal: 20,
                    paddingVertical: 3,
                    borderRadius: 10,
                  }}
                >
                  
                   تم الالغاء
                </Text>
                <Text>رقم الطلب:0001</Text>
              </View>
              <View style={styles.row}>
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
                      paddingBottom: 12,
                    }}
                  >
                    التذاكر
                  </Text>
                  <Text style={{ fontSize: 20, paddingLeft: 14 }}>
                    1,500{" "}
                    <Text style={{ fontSize: 12, color: "grey" }}>x10</Text>{" "}
                  </Text>
                </View>

                <View style={styles.date}>
                  <Text
                    style={{
                      textAlign: "right",
                      fontSize: 12,
                      color: "grey",
                      paddingBottom: 20,
                    }}
                  >
                    التاريخ
                  </Text>
                  <Text style={{
                      textAlign: "right",
                      fontSize: 12,
                      color: "grey",
                      paddingBottom: 20,
                    }}>19/02/2025</Text>
                </View>
                <View>
                  <MaterialCommunityIcons
                    name="ticket-outline"
                    size={60}
                    color="#888"
                    style={{
                      transform: [{ rotate: "90deg" }],
                    }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    paddingBottom: 30,
    marginTop: -30,
  },
  Links: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    paddingBottom: -1,
  },
  tickets: {
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight:40
  },
  done: {
    borderWidth: 1,
    borderColor: "#888",
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    marginBottom:20
  },
  first: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  date:{
    borderLeftWidth:1,
    borderColor:'#888',
    paddingHorizontal:10
  },

  totalTickets: {
    // marginRight:5,
    // justifyContent: "center",
  },
  ticketNumber:{
    borderLeftWidth:1,
    borderColor:'#888',
    paddingHorizontal:3
  },
  order:{
    padding:5,
    
  }
});

export default Tickets;
