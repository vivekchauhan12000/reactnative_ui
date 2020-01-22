

import React, { Component } from 'react'
import {  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Dimensions } from 'react-native';
 
  

  

  
  export default function App() {
  
    const [value, onChangeText] = React.useState('(+91)9756335260');

   
  
    return (
     
       
       <View style={styles.container}>
         <Text style={{fontSize:16}}>Please tell us your phone number </Text>
        <Text style={{fontSize:16,paddingBottom:10}}>to finish registration</Text>

        <TextInput
      style={{ height: 40,width:"70%",borderRadius:8,paddingTop:10,paddingLeft:5,paddingBottom:5, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  <View
   style={{
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'stretch',
  }}>
    <TouchableOpacity
         style={{height: 40,width:"30%",borderRadius:80,paddingTop:10,  alignItems:'center',
         backgroundColor: '#9B9A9C',
         padding: 10}}
         onPress={Alert.alert("OTP SEND")}
       >
         <Text> GET OTP </Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={{height: 40,width:"30%",borderRadius:80,paddingTop:10,  alignItems:'center',
         backgroundColor: '#3536B5',
         padding: 10}}
         onPress={Alert.alert("OTP SEND")}
       >
         <Text  style={{
         color: '#ffffff',
        }}> next </Text>
       </TouchableOpacity>
       </View>

       </View>
      
    );
  }







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});