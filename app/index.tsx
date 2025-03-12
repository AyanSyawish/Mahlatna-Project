import SignIn from "@/src/Screen/SignIn";
import SignUp from "@/src/Screen/SignUp";
import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Render the component here */}
      <SignIn />
      
    </SafeAreaView>
  );
}
