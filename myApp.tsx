import React, {useEffect, useState} from 'react';
import {Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { images } from './constants/images';
import { Fonts } from './constants/fonts';
const myComp = () => {
  const [name, setName] = useState('Abhi');
  useEffect(() => {
    setTimeout(() => {
      setName('unknown');
    }, 3000);
  }, []);
  const onChnageName = () => {
    if (name == 'Rameesh') {
      setName('Abhi');
    } else {
      setName('Rameesh');
    }
  };
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT=Dimensions.get('window').height
  return (
    <View>
      <Image source={images.layout}
        style={{
          width: WIDTH,
          height: WIDTH,
          resizeMode:'strecth'
        }}
      ></Image>
      <ScrollView style={{
        height: HEIGHT - WIDTH+75,
        backgroundColor: '#F2F4F9',
        top: -75,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        padding:20
      }}>
        <Text style={{
          fontFamily: Fonts.bold,
          fontSize: 22,
          lineHeight: 29,
          color:'#000000'
        }}>Create your account!</Text>
        <Text style={{
          fontFamily: Fonts.regular,
          fontSize: 14,
          lineHeight: 19,
          color: '#000000',
          marginTop:5
        }}>Enter your name below to get started</Text>

        <View style={{
          marginTop:25
        }}>
           <Text style={{
          fontFamily: Fonts.medium,
          fontSize: 14,
          lineHeight: 19,
          color: '#000000',
          marginTop:5
          }}>{"Name "}   
            <Text style={{
              color: 'red',
            }}>*</Text></Text>
          <TextInput
            placeholder='Your Name'
            style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            padding: 10,
            marginTop: 10,
            borderRadius:5
            }}></TextInput>
          <TouchableOpacity
            onPress={() => {
              alert("Logged in success")
            }}
            style={{
            width: "100%",
            backgroundColor: 'green',
            padding: 10,
            marginTop: 25,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems:'center'
          }}>
            <Text style={{
          fontFamily: Fonts.semiBold,
          fontSize: 15,
          lineHeight: 19,
          color: '#FFFFFF',
          marginTop:5
        }}>Continue with Phone</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};
export default myComp;
