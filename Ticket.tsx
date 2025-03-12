import * as React from "react";
import Svg, { SvgProps, Path, TextPath, Defs, G,Text,Image, TSpan } from "react-native-svg";
import { View } from "react-native";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={"90%"}
    height={"100%"}
    viewBox="0 0 384 119"
    fill="none"
    
    {...props}
  >
    <Path
    id="path"
      fill="#fff"
      stroke="#C5C6D0"
      strokeWidth={0.5}
      
      d="M109.178.25H8.365C3.885.25.25 3.872.25 8.33V110.67c0 4.458 3.635 8.08 8.115 8.08h100.813c.134-7.165 6.016-12.939 13.24-12.939 7.225 0 13.107 5.774 13.241 12.939h239.714c4.479 0 8.115-3.622 8.115-8.08V8.331c0-4.46-3.636-8.081-8.115-8.081H135.659c-.134 7.166-6.016 12.94-13.241 12.94-7.224 0-13.106-5.774-13.24-12.94Z"
    />
   
   
    <Path 
    id="second"
    fill="#fff"
     d="m122.572 101.353-.225-82.645.225 82.645Z"
      />
   
   

   
    <Path
    id="third"
      stroke="#007AFF"
      strokeDasharray="11.6 11.6"
      d="m122.572 101.353-.225-82.645"
      
    />
    <View
    >
    <Image
    href={require('../Raffle-Ticket/assets/images/mahalatna.png')}
    width={'35%'}
    height={'25%'}
    rotation='-90'
    y='20'
    x='-135'
    />
    <Text 
    fill={'#007AFF'}
    fontSize='15'
    fontWeight='700'
    textAnchor="middle"
    y='-45'
    x='35'
    >
    
    <TextPath href="#second" >
    1,500
    </TextPath>
  </Text>
  <Text
  fill={'black'}
  x='250'
  y='25'
  fontSize='15'
  >
    رقم التذكرة:0001 
    <TSpan dy='35' dx='-135' fontSize='13' fill={'#888'}>تاريخ الشراء: 19/02/2025</TSpan>
    <TSpan dy='20' dx='-138' fontSize='13' fill={'#888'}>تاريخ الانتهاء: 19/02/2025</TSpan>
    <TSpan dy='30' dx='-193' fontSize='13' fill={'#007AFF'} fontWeight={'500'}> كلما شاركت أكثر, زاد فرصتك في الربح</TSpan>
  </Text>
    </View>
    
  </Svg>
);
export default SvgComponent;
