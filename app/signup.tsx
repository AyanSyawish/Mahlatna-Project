import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SignUp from "@/src/Screen/SignUp";

const signup = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Render the component here */}
      <SignUp />
      
    </SafeAreaView>
  );
};

export default signup;

const styles = StyleSheet.create({});
