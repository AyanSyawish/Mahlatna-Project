import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import OTP from '@/src/Screen/OTP';

const otp = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
          {/* Render the component here */}
          <OTP/>
          
        </SafeAreaView>
      );
}

export default otp