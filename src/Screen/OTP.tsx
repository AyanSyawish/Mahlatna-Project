import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, router } from "expo-router";
import { OtpInput } from "react-native-otp-entry";

const OTP = () => {
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const iraqiPhone = (number) => {
    number = number.replace(/\D/g, ""); // Remove non-numeric characters
    if (number.startsWith("964")) {
      number = "+" + number;
    } else if (number.startsWith("7")) {
      number = "+964" + number;
    } else if (!number.startsWith("+964")) {
      number = "+964";
    }

    // Prevent deletion of +964 (if the user deletes everything, keep +964)
    if (number === "+964") return "+964 ";

    return number.replace(
      /(\+964)?(\d{1,3})?(\d{0,3})?(\d{0,4})?/,
      (_, p1, p2, p3, p4) => {
        return [p1, p2, p3, p4].filter(Boolean).join(" ");
      }
    );
  };
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS==='ios'?'position':'height'}
    style={{flex:1}}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
      {/* First row with icon and Arabic text aligned to the right */}
      <View style={styles.row}>
        <Text style={styles.text1}>التحقق من الرمز</Text>
        <MaterialCommunityIcons
          name="account-outline"
          size={30}
          color="black"
        />
      </View>

      {/* Second Arabic text below the first one */}
      <Text style={styles.text2}>لا عليك اعادة كلمة السر الان</Text>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/mahalatna.png")}
        />
        <Text style={styles.text3}>
          ادخل الرمز الذي قمنا بارساله الي رقم الهاتف المسجل لدينا
        </Text>
      </View>
      <View>
        <View>
          <OtpInput numberOfDigits={5} />
        </View>
        <View>
          <TouchableOpacity style={styles.butttonSign} onPress={()=>router.replace('/(tabs)/home')}>
            <Text style={styles.buttonText}> ادخل رمز التحقق</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Add some padding around the container
  },
  row: {
    flexDirection: "row", // This ensures that the icon and text are on the same line
    justifyContent: "flex-end", // Start from the top of the screen
    //   alignItems: 'flex-end', // Align everything to the right of the screen (RTL)
    //   alignItems: 'center', // Center icon and text vertically in the row
  },
  icon: {
    marginLeft: 10, // Add space between the icon and text
  },
  text1: {
    fontSize: 20,
    color: "black",
    textAlign: "right", // Ensure text is aligned to the right for RTL
    marginBottom: 10, // Add space between the rows of text
  },
  text2: {
    fontSize: 15,
    color: "grey",
    paddingRight: 5,
    textAlign: "right", // Ensure text is aligned to the right for RTL
    marginBottom: 10, // Add space between the rows of text
  },
  image: {
    width: 150, // Set the width of the image
    height: 150, // Set the height of the image
    marginBottom: 20, // Add space below the image
  },
  imageContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  text3: {
    marginTop: -30,
    textAlign: "center",
    fontSize: 20,
    color: "#007AFF",
  },
  scrollView: {
    flexGrow: 1,
  },
  groupInput: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#cccc",
    borderRadius: 15,
    backgroundColor: "#DCDCDC",
    gap: 5,
  },

  button: {
    borderWidth: 0.7,
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
  butttonSign: {
    backgroundColor: "#007AFF",
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  SignIn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 190,
    gap: 10,
  },
});

export default OTP;
