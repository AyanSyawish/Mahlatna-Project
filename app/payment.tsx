import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Payment from '@/src/Screen/Payment'

const payment = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Payment/>
    </SafeAreaView >
  )
}

export default payment