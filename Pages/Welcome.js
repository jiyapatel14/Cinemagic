import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/fonts/moviePoster.jpg')} style={styles.backgroundImage}>
     <Animatable.View animation="zoomIn" >
     <TouchableOpacity style={styles.text} onPress={() => navigation.navigate('Login')}> 
         <Text style={styles.text}>CINEMAGIC</Text>
     </TouchableOpacity>
     </Animatable.View>
    </ImageBackground>
    </View>
  )
};
  const styles = StyleSheet.create({
    container: {
      flex:1,     
     },
     backgroundImage:{
        height: '100%',
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent:'center',
        opacity: 0.9,
     },
     text: {
        color: "#FFFFE0",
        fontStyle:'italic',
        fontSize: 50,
        lineHeight: 80,
        fontWeight: "bold",
        textAlign: "center",
        textShadowOffset:{ width: 2, height: 2},
        textShadowColor: "#FFD700",
        textShadowRadius:15,
        letterSpacing: 6.0,
        backgroundColor: "#000000c0",
        alignItems:'center',
        elevation: 1,
        opacity: 1,
     }
  })